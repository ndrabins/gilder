import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/theme";
import { AppMenu } from "./components";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ flex: 1, height: "100vh" }}>
        <AppMenu />
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            bgcolor: (theme) => alpha(theme.palette.grey[800], 1),
            flex: 1,
            height: "100%",
          }}
        >
          <Box>
            <Button variant="contained">Contained</Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
