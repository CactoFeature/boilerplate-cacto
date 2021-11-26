import { createTheme, colors } from "@material-ui/core";
import { typography } from "./typography";

const white = "#FFFF";

const theme = createTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      contrastText: white,
      dark: "#6b0001",
      main: "#a0282b",
      light: "#d75a54",
    },
    secondary: {
      contrastText: white,
      dark: "#3b3b3c",
      main: "#656566",
      light: "#939394",
    },
    text: {
      primary: "#3b3b3c",
      secondary: "#656566",
    },
  },
  typography,
});

export default theme;
