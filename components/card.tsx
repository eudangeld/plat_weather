import { Box, Button, Heading, Image, Text } from "grommet";
import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { WeatherProps } from "../interfaces/types";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 5%;
  padding: 5px 30px;
  width: 310px;
  height: 310px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Temp = styled.h1`
  float: right;
  color: rgba(125, 76, 219, 1);
  font-weight: 250;
  font-size: 5.59375em;
  line-height: 0.2em;
`;

export const Card: FC<WeatherProps> = (props) => {
  return (
    <>
      <Container>
        <Box direction="row">
          <Box>
            <Heading level={2} margin={{ bottom: "0px" }} color="brand">
              {props.name}
            </Heading>
            <Text color="brand">
              {props.weather[0].description.toUpperCase()}
            </Text>
          </Box>
          <Box align="end" width="small">
            <Image
              fit="contain"
              src={
                process.env.BASE_ICON_URL + props.weather[0].icon + "@2x.png"
              }
            />
          </Box>
        </Box>
        <Box>
          <Temp>{Math.trunc(props.main.temp) + " º"}</Temp>
        </Box>
      </Container>
    </>
  );
};

export default Card;
