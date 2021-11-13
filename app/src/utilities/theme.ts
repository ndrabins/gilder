import { createTheme } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import darkScrollbar from "@mui/material/darkScrollbar";

// https://github.com/tailwindlabs/tailwindcss/blob/b8cda161dd0993083dcef1e2a03988c70be0ce93/src/public/colors.js
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

const gray = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e5e5e5",
  300: "#d4d4d4",
  400: "#a3a3a3",
  500: "#737373",
  main: "#525252",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717",
};

// TODO: update this
const gilderGold = {
  50: "#FFFCEE",
  100: "#F3F0DC",
  200: "#F2EECE",
  300: "#ECE7BF",
  400: "#E8E6BA",
  main: "#E8E6BA",
  500: "#E1DFAF",
  600: "#D1CF99",
  700: "#BEBB76",
  800: "#AEAB63",
  900: "#928E3D",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      ...gilderGold,
      main: gilderGold[700],
    },
    secondary: gilderBlue,
    grey: gray,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});
