import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
// import translationEN from `${process.env.PUBLIC_URL}/locales/en/translation.json`;
// import translationDE from '../public/locales/de/translation.json';

// the translations
// const resources = {
//   en: {
//     translation: translationEN
//   },
//   de: {
//     translation: translationDE
//   }
// };
i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    load: "unspecific",
    debug: true,
    fallbackLng: "en", // use en if detected lng is not available
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
