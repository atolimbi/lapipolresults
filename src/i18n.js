import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './assets/i18n/en.json';
import ES from './assets/i18n/es.json';

const resources = {
  en: {
    translation: EN,
  },
  es: {
    translation: ES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
