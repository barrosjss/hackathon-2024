import { InputPassword, LayoutHome } from "@components";
import useCreateNewPassword from "./useCreateNewPassword";
import { Button, Stack, Typography } from "@mui/material";

export const CreateNewPassword = () => {
  const {
    language,
    onChangeLanguage,
    handleRecoverAccount,
    onChange,
    t,
    password,
    confirmPassword,
  } = useCreateNewPassword();
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

      <InputPassword
        label={t("inputPassword")}
        onChange={(e) => onChange(e, "password")}
        value={password}
      />
      <InputPassword
        label={t("inputConfirmPassword")}
        onChange={(e) => onChange(e, "confirmPassword")}
        value={confirmPassword}
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
