import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_navbar from '../locales/en/navbar.json';
import en_home from '../locales/en/home.json';
import en_footer from '../locales/en/footer.json';
import en_sidebar from '../locales/en/sidebar.json';

import ma_navbar from '../locales/ma/navbar.json';
import ma_home from '../locales/ma/home.json';
import ma_footer from '../locales/ma/footer.json';
import ma_sidebar from '../locales/ma/sidebar.json';

import hi_navbar from '../locales/hi/navbar.json';
import hi_home from '../locales/hi/home.json';
import hi_footer from '../locales/hi/footer.json';
import hi_sidebar from '../locales/hi/sidebar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: en_navbar,
        home: en_home,
        footer: en_footer,
        sidebar:en_sidebar
      },
      ma: {
        navbar: ma_navbar,
        home: ma_home,
        footer: ma_footer,
        sidebar:ma_sidebar,
      },
      hi: {
        navbar: hi_navbar,
        home: hi_home,
        footer: hi_footer,
        sidebar:hi_sidebar
      }
    },
    lng: 'ma',
    fallbackLng: 'en',
    ns: ['navbar', 'home','footer','sidebar'],
    defaultNS: 'navbar',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
