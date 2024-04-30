import { InputPassword, LayoutHome } from "@components";
import useRegister from "./useRegister";
import { Box, Button, Stack, TextField, Typography, Link } from "@mui/material";
import { InputText } from "types/general";
import { Link as LinkRouter } from "react-router-dom";

export const Register = () => {
  const {
    language,
    onChangeLanguage,
    handleRegister,
    onChange,
    t,
    email,
    password,
    nombres,
    passwordConfirm,
  } = useRegister();
  return (
    <LayoutHome
      language={language}
      onChangeLanguage={onChangeLanguage}
      onSubmit={handleRegister}
      t={t}
      backButton
    >
      <Stack pt={{ sm: 5 }} spacing={4} minWidth={{ xs: "100%", sm: 480 }}>
        <Typography
          fontWeight={500}
          fontSize={{ xs: 30, sm: 32, md: 30   }}
          textAlign={{ xs: "start", sm: "center" }}
        >
          Empieza a manejar tu economía{" "} 
          <Box component="br" display={{ xs: "none", sm: "block" }} />
          de forma mas sencilla. Registrate ya!
        </Typography>
        <Stack spacing={2}>
          <TextField
            type="text"
            value={nombres}
            label={t("inputName")}
            variant="outlined"
            fullWidth
            required
            onChange={(e: InputText) => onChange(e, "nombres")}
          />
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
            value={password}
            label={t("inputPassword")}
            onChange={(e) => onChange(e, "password")}
          />
          <InputPassword
            value={passwordConfirm}
            label={t("inputPasswordConfirm")}
            onChange={(e) => onChange(e, "passwordConfirm")}
          />
        </Stack>
      </Stack>
      <Button sx={{textTransform: "inherit"}} variant="contained" type="submit" fullWidth color="primary">
        <Typography >{t("submit")}</Typography>
      </Button>
      <Typography>
        {t("haveAccount")}{" "}
        <Link
          component={LinkRouter}
          sx={{ textDecoration: "none" }}
          to="/auth/login"
        >
          {t("loginAccount")}
        </Link>
      </Typography>
    </LayoutHome>
  );
};
