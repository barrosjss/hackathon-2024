import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
// import { red } from "@mui/material/colors";
export const palette = {
  primary: {
    main: "#66BFBF",
    contrastText: "#fff",
  },
  secondary: {
    main: "#ececf2",
  },
  error: {
    main: red.A400,
  },
  text: {
    primary: "#252525",
    secondary: "#4d5169",
    disabled: "#959596",
  },
};
export const theme = createTheme({
  palette,
});
