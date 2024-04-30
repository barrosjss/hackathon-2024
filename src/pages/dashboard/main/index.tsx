import { Button, Stack } from "@mui/material";
import UserCondition from "./userCondition";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Link as LinkRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#26425A",
    },
  },
});

export const Main = () => {
  return (
    <Stack minHeight="20vh" spacing={5} px={20} justifyContent="center">
      <ThemeProvider theme={theme}>
        <AppBar position="absolute" sx={{ px: 10 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            <Link
              component={LinkRouter}
              to="/auth/login"
            >
              <Button color="inherit">Logout</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <UserCondition />
    </Stack>
  );
};
