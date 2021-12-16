import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tru from './ru/ru.json';
import ten from './en/en.json';



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ru: { translation: tru },
      en: { translation: ten }
    },
    lng: "ru", 
    
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;