import { createTheme } from "@mui/material/styles";
import { teal, blueGrey, yellow } from "@mui/material/colors";
import darkScrollbar from "@mui/material/darkScrollbar";

const gilderBlue = {
  50: "#ECFEFF",
  100: "#CFFAFE",
  200: "#A5F3FC",
  300: "#67E8F9",
  400: "#22D3EE",
  main: "#0891B2",
  500: "#06B6D4",
  600: "#0891B2",
  700: "#0E7490",
  800: "#155E75",
  900: "#164E63",
};

// possible blue
const gilderSky = {
  50: "#F0F9FF",
  100: "#E0F2FE",
  200: "#BAE6FD",
  300: "#7DD3FC",
  400: "#38BDF8",
  500: "#0EA5E9",
  600: "#0284C7",
  main: "#0284C7",
  700: "#0369A1",
  800: "#075985",
  900: "#0C4A6E",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      ...yellow,
      main: yellow[700],
    },
    secondary: gilderBlue,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});
