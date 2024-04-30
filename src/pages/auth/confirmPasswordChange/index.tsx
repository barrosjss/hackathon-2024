import { LayoutHome } from "@components";
import { Button, Stack, Typography } from "@mui/material";
import useConfirmPasswordChange from "./useConfirmPasswordChange";
import { CheckIcon } from "@assets";

export const ConfirmPasswordChange = () => {
  const { language, onChangeLanguage, t } = useConfirmPasswordChange();
  return (
    <LayoutHome
      language={language}
      onChangeLanguage={onChangeLanguage}
      onSubmit={() => {}}
      t={t}
      backButton
    >
      <Stack alignItems="center">
        <CheckIcon size={100} />
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
