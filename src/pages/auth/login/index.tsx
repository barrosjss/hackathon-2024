import { Button, Typography, TextField, Link, Box, Stack } from "@mui/material";
import { InputText } from "types/general";
import { LayoutHome, InputPassword } from "@components";
import useLogin from "./useLogin";
import { Link as LinkRouter } from "react-router-dom";

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
        Maneja tu economía de forma{" "}
        <Box component="br" display={{ xs: "none", sm: "block" }} />
        sencilla con <b>Financial Check </b>
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
      <Button
        sx={{ textTransform: "inherit" }}
        variant="contained"
        type="submit"
        fullWidth
      >
        <Typography fontWeight={400}>{t("submit")}</Typography>
      </Button>
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
    </LayoutHome>
  );
};
