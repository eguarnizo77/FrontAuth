import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '../constants/locales/en/translation.json'
import translationES from '../constants/locales/es/translation.json'

const languages = ['en', 'es']

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    whitelist: languages,
    fallbackLng: 'en',
    debug: true, // Uncomment this to show errors or info at browser console
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
export default i18n
