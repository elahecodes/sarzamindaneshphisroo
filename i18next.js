import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fa: {
        translation: {
          navbar: {
            home: "صفحه اصلی",
            aboutus: "درباره ما",
            contact: "تماس با ما",
            portfolio: "نمونه کارها",
            blogs: "وبلاگ‌ها",
            projectorder: "درخواست پروژه",
          },
        },
      },

      en: {
        translation: {
          navbar: {
            home: "Home",
            portfolio: "Portfolio",
            aboutus: "About Us",
            blogs: "Blogs",
            contact: "Contact",
            projectorder: "Project Request",
          },
        },
      },
    },

    fallbackLng: "fa",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
