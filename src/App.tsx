import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/theme";
import { AppMenu } from "./components";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ flex: 1, height: "100vh" }}>
        <AppMenu />
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            bgcolor: (theme) => alpha(theme.palette.primaryDark[900], 1),
            flex: 1,
            height: "100%",
          }}
        ></Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
