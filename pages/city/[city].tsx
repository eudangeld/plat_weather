import { NextPage } from "next";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Spinner from "../../components/spinner";
import useGeoWeather from "../../hooks/useWeather";

const Topic: NextPage = (_) => {
  const router = useRouter();
  const [weather, loading] = useGeoWeather(router.asPath.split("/")[2]);
  if (loading) {
    return <Spinner />;
  }

  return <Layout {...weather}></Layout>;
};

export default Topic;
