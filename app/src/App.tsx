import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/theme";
import Box from "@mui/material/Box";
import { Routes } from "./Routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100%;
  }
  html {
    height: 100%;
  }
  #root {
    height: 100vh;
  }

`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
