import { Box, Grid, ResponsiveContext } from "grommet";
import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { WeatherProps } from "../interfaces/types";
import AppHeader from "./header";
import Navigation from "./navigation";
import Card from "../components/card";

const Layout: FC<WeatherProps> = (props) => {
  const size = useContext(ResponsiveContext);
  const router = useRouter();
  const _topic = router.asPath.split("/")[2];

  return (
    <Box>
      <AppHeader />
      {props.children}
      {size !== "small" && (
        <Grid
          responsive={true}
          columns={{
            count: 2,
            size: ["small", "auto"],
          }}
        >
          <Box style={{ position: "fixed" }}>
            <Navigation currentTopic={_topic} />
          </Box>
          <Box margin={{ left: "280px" }}>
            <Card {...props} />
          </Box>
        </Grid>
      )}
      {size === "small" && size === "small" && (
        <Box margin={{ top: "large" }}>
          <Card {...props} />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
