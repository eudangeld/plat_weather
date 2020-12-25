import axios from "axios";
import { useEffect, useState } from "react";
import { GeoCordinates, WeatherProps } from "../interfaces/types";

const useGeoWeather = () => {
  const [usingGeoIp, setGeoIp] = useState(false);
  const [weather, setWeather] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let geo: any;
    async function withBrowserLocation() {
      navigator.geolocation.getCurrentPosition((b) => {
        setGeoIp(false);
        return {
          lat: b.coords.latitude,
          lng: b.coords.longitude,
        };
      });
    }

    async function getLocation() {
      geo = await withBrowserLocation();
      if (geo === undefined) {
        setGeoIp(true);
        geo = await useIPWeather();
      }
      useWeatherCordinates(geo).then((_weather) => {
        setWeather(_weather);
        setLoading(false);
      });
    }

    getLocation();
  }, []);

  return [weather, loading, usingGeoIp];
};

export default useGeoWeather;

export async function useWeatherCordinates(
  props: GeoCordinates
): Promise<WeatherProps> {
  const _result = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${props.lat.toString()}&lon=${props?.lng.toString()}&appid=${
      process.env.WEATHER_KEY
    }`
  );
  return _result.data;
}

export async function useIPWeather(): Promise<GeoCordinates> {
  const _result = await axios.get(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.IPLOCATION_KEY}`
  );
  return {
    lat: _result.data.latitude,
    lng: _result.data.longitude,
  };
}
