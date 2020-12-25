import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "../../components/spinner";
import useGeoWeather from "../../hooks/useWeather";

const Topic: NextPage = (_) => {
  const router = useRouter();

  console.log("vamos corinthians");
  console.log(router.asPath.split("/")[2]);

  const [weather, loading, usingGeoIp] = useGeoWeather(
    router.asPath.split("/")[2]
  );
  return <Spinner />;
};
export default Topic;
