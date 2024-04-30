import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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

export const CreateArticle = () => {
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
      <Box
        sx={{
          pt: { xs: 4, sm: 10 },
          pb: { xs: 8, sm: 16 },
          color: "#06090a",
          bgcolor: "white",
          width: "150vh",
        }}
      >
        <Container
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "60%" },
              textAlign: { sm: "left", md: "center" },
              py: 5,
            }}
          >
            <Typography component="h2" variant="h4">
              Ingreso de articulos
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Material"
              sx={{
                width: 500,
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Cantidad"
              sx={{
                width: 500,
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Precio Sugerido"
              sx={{
                width: 500,
              }}
            />
          </Box>
        </Container>
      </Box>
    </Stack>
  );
};
