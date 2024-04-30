import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { PropsComponen } from "types/general";

export const AppTheme = ({ children }: PropsComponen) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
