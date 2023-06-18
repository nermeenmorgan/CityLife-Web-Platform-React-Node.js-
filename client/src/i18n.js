import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { useTranslation } from "react-i18next";
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json'

const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

const resources = {
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    lng: selectedLanguage,
    fallbackLng:"en",
    debug: true,
    resources,
    interpolation: {
      escapeValue: false
    }
  });

  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('selectedLanguage', lng);
  });

export default i18n;