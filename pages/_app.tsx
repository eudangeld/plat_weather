import { Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import App from "next/app";
import React from "react";
import { createGlobalStyle } from "styled-components";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const GlobalStyle = createGlobalStyle`
         
  body {
    margin: 0;
    a:link { 
            text-decoration: none; 
        } 
        
  }
`;
    // here we can put devived styles from theo or hardCoded

    const fontTheme = deepMerge(GlobalStyle, {
      global: {
        font: {
          family: "Archivo",
        },

        size: {
          xxsmall: "48px",
          xsmall: "96px",
          small: "192px",
          medium: "384px",
          large: "768px",
          xlarge: "1200px",
          xxlarge: "1536px",
          full: "100%",
        },
      },
    });

    return (
      <Grommet theme={fontTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Grommet>
    );
  }
}
