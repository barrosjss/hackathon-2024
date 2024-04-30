import { Button, Typography, TextField, Link, Box, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputText } from "types/general";
import { LayoutHome, InputPassword } from "@components";
import useLogin from "./useLogin";
import { Link as LinkRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#26425A",
    },
  },
});

export const Login = () => {
  const {
    handleLogin,
    email,
    password,
    onChange,
    onChangeLanguage,
    t,
    language,
  } = useLogin();

  return (
    <LayoutHome
      onSubmit={handleLogin}
      onChangeLanguage={onChangeLanguage}
      language={language}
    >
      <Typography
        fontWeight={500}
        fontSize={{ xs: 30, sm: 34 }}
        textAlign={{ xs: "start", sm: "center" }}
      >
        Mejora el mundo reciclando y{" "}
        <Box component="br" display={{ xs: "none", sm: "block" }} />
        limpiando las calles
      </Typography>
      <Stack minWidth={{ xs: "100%", sm: 480 }} spacing={2}>
        <TextField
          type="email"
          value={email}
          label={t("inputEmail")}
          variant="outlined"
          fullWidth
          required
          onChange={(e: InputText) => onChange(e, "email")}
        />
        <InputPassword
          label={t("inputPassword")}
          onChange={(e) => onChange(e, "password")}
          value={password}
        />
      </Stack>
      {/* <Link
        component={LinkRouter}
        sx={{ textDecoration: "none" }}
        to="/auth/forget"
      >
        {t("recoverPassword")}
      </Link> */}
      <ThemeProvider theme={theme}>
        <Button
          sx={{ textTransform: "inherit" }}
          variant="contained"
          type="submit"
          fullWidth
        >
          <Typography fontWeight={400}>{t("submit")}</Typography>
        </Button>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Typography>
          {t("dontHaveAccount")}{" "}
          <Link
            component={LinkRouter}
            sx={{ textDecoration: "none" }}
            to="/auth/register"
          >
            {t("registerAccount")}
          </Link>
        </Typography>
      </ThemeProvider>
    </LayoutHome>
  );
};
