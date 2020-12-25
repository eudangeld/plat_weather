import axios from "axios";
import { useEffect, useState } from "react";
import { GeoCordinates, WeatherProps } from "../interfaces/types";

const useGeoWeather = () => {
  const [usingGeoIp, setGeoIp] = useState(false);
  const [weather, setWeather] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<GeoCordinates>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    async function withBrowserLocation() {
      navigator.geolocation.getCurrentPosition(success, error);

      async function success(pos: any) {
        await getWeather({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      }

      async function error(_: any) {
        setGeoIp(true);
        withIpLocation().then(getWeather);
      }

      async function getWeather(position: any) {
        useWeatherCordinates(position).then((weather) => {
          setLocation(position);
          setWeather(weather);
          setLoading(false);
        });
      }
    }

    withBrowserLocation();
  }, []);

  return [weather, loading, usingGeoIp, location];
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

export async function withIpLocation(): Promise<GeoCordinates> {
  const _result = await axios.get(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.IPLOCATION_KEY}`
  );
  return {
    lat: _result.data.latitude,
    lng: _result.data.longitude,
  };
}
