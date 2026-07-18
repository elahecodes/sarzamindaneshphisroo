import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import fa from "./src/locales/fa.json";
import en from "./src/locales/en.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fa: {
        translation: 
          fa,
      },

      en: {
        translation: 
          en,
      },
    },

    fallbackLng: "fa",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
