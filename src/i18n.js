import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";

i18n
  // Falls back to the browser's language on first visit (before the
  // user has picked one manually). Our own localStorage value from
  // useLanguageStore takes over after that via applyLanguage().
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values, so this isn't needed
    },
  });

export default i18n;
