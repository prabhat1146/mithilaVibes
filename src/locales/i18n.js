import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ma from './ma.json';
import hi from './hi.json';
import en from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ma: { translation: ma },
      hi: { translation: hi },
      en: { translation: en },
    },
    lng: 'ma',  // default language: Maithili
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
