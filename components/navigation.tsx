import { Box, Text } from "grommet";
import { HomeOption } from "grommet-icons";
import Link from "next/link";
import { FC } from "react";
import { NavigationProps } from "../interfaces/types";

const Navigation: FC<NavigationProps> = (props) => {
  return (
    <Box
      style={{ boxShadow: "none" }}
      onClick={() =>
        props.defaultAction !== undefined ? props.defaultAction() : null
      }
      margin={{ left: "small" }}
      direction="column"
    >
      <Text margin={{ bottom: "small", top: "medium" }}>
        Filter by EUA city
      </Text>

      {mockNavigation.map((item) => (
        <Link
          key={`${item}eia-key-`}
          passHref
          href={"/city/" + item.toLowerCase()}
        >
          <Box
            margin={{ bottom: "medium" }}
            style={{ boxShadow: "none" }}
            gap={"mediu,"}
            align="center"
            direction="row"
          >
            <HomeOption color="white" />
            <Text color="white">{item}</Text>
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
  "Nashville",
  "Los Angeles",
  "New York City",
];
