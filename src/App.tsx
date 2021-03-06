import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/theme";
import { NavRoutes } from "./Routes";
import { createGlobalStyle } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";

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
      <CssBaseline />
      <GlobalStyle />
      <NavRoutes />
    </ThemeProvider>
  );
}

export default App;
