import { Box, Button, Collapsible, ResponsiveContext, Text } from "grommet";
import { Menu as Burger } from "grommet-icons";
import { FC, useContext, useState } from "react";

import Navigation from "./navigation";

const AppHeader: FC = (_) => {
  const [open, setOpen] = useState(false);
  const size = useContext(ResponsiveContext);

  return (
    <Box background={{ color: "brand" }} fill="horizontal">
      {size !== "small" && (
        <Box justify="center" pad={"small"} direction="row">
          <Text>Platform weather</Text>
        </Box>
      )}

      {size === "small" && (
        <Box align="center" direction="row">
          <Button
            style={{ boxShadow: "none" }}
            onClick={(_) => setOpen(!open)}
            icon={<Burger />}
          />
          <Text>Platform weather</Text>
        </Box>
      )}
      <Collapsible open={open && size === "small"}>
        <Box background={{ color: "brand" }}>
          <Navigation
            defaultAction={() => {
              return setOpen(false);
            }}
          />
        </Box>
      </Collapsible>
    </Box>
  );
};

export default AppHeader;
