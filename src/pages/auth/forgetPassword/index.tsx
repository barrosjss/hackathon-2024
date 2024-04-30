import { LayoutHome } from "@components";
import useForgetPassword from "./useForgetPassword";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { InputText } from "types/general";

export const ForgetPassword = () => {
  const {
    language,
    onChangeLanguage,
    handleRecoverAccount,
    onChange,
    t,
    email,
  } = useForgetPassword();
  return (
    <LayoutHome
      language={language}
      onChangeLanguage={onChangeLanguage}
      onSubmit={handleRecoverAccount}
      t={t}
      backButton
    >
      <Stack alignItems="center">
        <Typography component="h1" fontSize={30} gutterBottom>
          {t("title")}
        </Typography>
        <Typography
          fontSize={18}
          color="#8391A1"
          textAlign="center"
          maxWidth={440}
        >
          {t("description1")}
        </Typography>
      </Stack>
      <TextField
        type="email"
        value={email}
        label={t("inputEmail")}
        variant="outlined"
        fullWidth
        required
        onChange={(e: InputText) => onChange(e, "email")}
      />
      <Button
        sx={{ textTransform: "inherit" }}
        variant="contained"
        type="submit"
        fullWidth
        color="primary"
      >
        <Typography>{t("submit")}</Typography>
      </Button>
    </LayoutHome>
  );
};
