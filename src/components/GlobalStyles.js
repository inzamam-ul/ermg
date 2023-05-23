import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        padding: 0;
        margin: 0;
      }
      html,
      body {
        height: 100%;
      }
      #root {
        height: 100%;
      }
    `}
  />
);
