import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import authService from '../Services/authServices'
import { store } from '../Redux/store'

import english from './Languages/English/translation.json'
import french from './Languages/French/translation.json'

const resources = {
  english: {
    translation: english,
  },
  french: {
    translation: french,
  },
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'english',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: [],
        lookupLocalStorage: 'i18nextLng',
    },
  })

let currentLanguage = i18next.language;

store.subscribe(() => {
  setTimeout(() => {
    const language: string =
      authService.getLanguage() ??
      store.getState().currentUser?.preferences?.languages ??
      'english'

    const languageKey = language.toLowerCase() as keyof typeof resources

    if (languageKey !== currentLanguage && resources[languageKey]) {
      i18next.changeLanguage(languageKey)
      currentLanguage = languageKey
    }
  }, 0) 
})

export default i18next