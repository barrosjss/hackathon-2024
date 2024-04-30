import { en, es } from "./locales";
import i18next from "i18next";

i18next.init({
  lng: "es",
  fallbackLng: "es",
  resources: {
    es: {
      global: es,
    },
    en: {
      global: en,
    },
  },
});

export default i18next;
