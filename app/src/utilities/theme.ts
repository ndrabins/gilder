import { createTheme } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
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

// const warmGray = {
//   50: "#fafaf9",
//   100: "#f5f5f4",
//   200: "#e7e5e4 ",
//   300: "#d6d3d1 ",
//   400: "#a8a29e ",
//   main: "#78716c ",
//   500: "#78716c ",
//   600: "#57534e ",
//   700: "#44403c ",
//   800: "#292524 ",
//   900: "#1c1917 ",
// };

// const gray = {
//   100: "#f7fafc",
//   200: "#edf2f7",
//   300: "#e2e8f0",
//   400: "#cbd5e0",
//   500: "#a0aec0",
//   600: "#718096",
//   700: "#4a5568",
//   800: "#2d3748",
//   900: "#1a202c",
// };

// possible blue
// const gilderSky = {
//   50: "#F0F9FF",
//   100: "#E0F2FE",
//   200: "#BAE6FD",
//   300: "#7DD3FC",
//   400: "#38BDF8",
//   500: "#0EA5E9",
//   600: "#0284C7",
//   main: "#0284C7",
//   700: "#0369A1",
//   800: "#075985",
//   900: "#0C4A6E",
// };

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
