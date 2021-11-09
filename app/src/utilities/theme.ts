import { createTheme } from "@mui/material/styles";
import { teal, blueGrey, yellow } from "@mui/material/colors";
import darkScrollbar from "@mui/material/darkScrollbar";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: teal,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});
