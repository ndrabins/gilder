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

// const green = {
//   50: "#ecfdf5",
//   100: "#d1fae5",
//   200: "#a7f3d0",
//   300: "#6ee7b7",
//   400: "#34d399",
//   500: "#10b981",
//   main: "#059669",
//   600: "#059669",
//   700: "#047857",
//   800: "#065f46",
//   900: "#064e3b",
// };

const green = {
  50: "#f0fdfa",
  100: "#ccfbf1",
  200: "#99f6e4",
  300: "#5eead4",
  400: "#2dd4bf",
  500: "#14b8a6",
  main: "#14b8a6",
  600: "#0d9488",
  700: "#0f766e",
  800: "#115e59",
  900: "#134e4a",
};

const red = {
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fecaca",
  300: "#fca5a5",
  400: "#f87171",
  500: "#ef4444",
  main: "#dc2626",
  600: "#dc2626",
  700: "#b91c1c",
  800: "#991b1b",
  900: "#7f1d1d",
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

const amber = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde68a",
  300: "#fcd34d",
  400: "#fbbf24",
  500: "#f59e0b",
  600: "#d97706",
  700: "#b45309",
  800: "#92400e",
  900: "#78350f",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      ...amber,
      main: amber[400],
    },
    secondary: { ...gilderBlue },
    grey: gray,
    success: {
      ...green,
    },
    error: { ...red },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
        html: darkScrollbar(),
        div: darkScrollbar(),
      },
    },
  },
});
