import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEn from './src/locales/en/translationEn.json'
import translationFr from './src/locales/fr/translationFr.json'

const resources = {
  en: {
    translation: translationEn
  },
  fr: {
    translation: translationFr
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources
  })

export default i18n
