import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Direction = () => {
  const { i18n } = useTranslation();
 useEffect(() => {
    document.documentElement.dir =
      i18n.language === "fa" ? "rtl" : "ltr";

    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
};

export default Direction;
