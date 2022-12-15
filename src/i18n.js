import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ru',
    resources: {
      ru:{
        translation: {
          navB_Spisok: 'Список'
          place_of_birth: 'Место рождения'

        }
      }
      en:{
        translation: {
          navB_Spisok: 'List'
          place_of_birth: 'Place of birth'

        }
      }
    }
  })