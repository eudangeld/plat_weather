import { Box, Text } from "grommet";
import { HomeOption } from "grommet-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { NavigationProps } from "../interfaces/types";

const Navigation: FC<NavigationProps> = (props) => {
  const router = useRouter();
  const _topic = router.asPath.split("/")[2];

  return (
    <Box
      style={{ boxShadow: "none" }}
      onClick={() =>
        props.defaultAction !== undefined ? props.defaultAction() : null
      }
      margin={{ left: "small" }}
      direction="column"
    >
      <Text margin={{ bottom: "small", top: "medium" }}>Filter by country</Text>

      {mockNavigation.map((item) => (
        <Link
          key={`${item}eia-key-`}
          passHref
          href={"/country/" + item.toLowerCase()}
        >
          <Box
            style={{ boxShadow: "none" }}
            gap={"mediu,"}
            align="center"
            direction="row"
          >
            <HomeOption
              color={_topic === item.toLowerCase() ? "brand" : "black"}
            />
            <Text color={_topic === item.toLowerCase() ? "brand" : "black"}>
              {item}
            </Text>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Navigation;

export const mockNavigation = [
  "Chicago",
  "New orleans",
  "Oahu",
  "Nashville",
  "Los Angeles",
  "New York City",
];
