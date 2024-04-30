import { useTranslation } from "react-i18next";

const useConfirmPassworChange = () => {
  const { t: T, i18n } = useTranslation("global");

  const onChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const t = (value: string, general = false) => {
    if (general) {
      return T(value);
    }
    return T(`confirmPasswordChange.${value}`);
  };

  return {
    onChangeLanguage,
    t,
    language: i18n.language,
  };
};

export default useConfirmPassworChange;
