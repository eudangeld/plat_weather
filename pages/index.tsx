import { NextPage } from "next";
import Layout from "../components/layout";
import Spinner from "../components/spinner";
import useGeoWeather from "../hooks/useWeather";
import { WeatherProps } from "../interfaces/types";

const Index: NextPage<any> = (_) => {
  const [weather, loading, usingGeoIp] = useGeoWeather();

  if (loading) {
    return <Spinner />;
  }

  let props: WeatherProps = { ...weather };
  props.iplocation = usingGeoIp;

  return <Layout {...props}></Layout>;
};

export default Index;
