import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/theme";
import Box from "@mui/material/Box";
import { Routes } from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ flex: 1, height: "100vh" }}>
        <Routes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
