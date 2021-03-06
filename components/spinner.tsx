import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  plain?: boolean;
  color?: string;
  size?: string;
};

export const Spinner: FC<Props> = (props) => {
  return (
    <StyledSpinner viewBox="0 0 50 50" {...props}>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.svg<Props>`
  stroke: blueviolet;
  animation: rotate 1s linear infinite;
  margin: ${(props) => (props.plain ? "0px" : "40px")};
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  & .path {
    stroke: "black";
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
