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
          about: 'О портале',
          about_description: 'Данный портал содержит информацию о писателях Беларуси. На основной странице размещена информация о писателе дня и описание команды разработчиков портала. Также портал содержит персональную страницу каждого писателя. На каждой странице имеется описание деятеля: биография, фотогалерея с его изображениями и изображениями его произведений, видео на YouTube о деятеле, место его рождения на карте.',
          navB_List: 'Список',
          navB_Main: 'Главная',
          dev1_fio: 'Артем Данько',
          dev1_descr: 'Привет, мир! Этот текст обо мне.',
          dev2_fio: 'Андрей Нестерук',
          dev2_descr: 'Привет, мир! Этот текст обо мне.',
          day_author: 'Деятель дня',
          inform:'ИНФОРМАЦИЯ',
          wsearch: 'Поиск писателей портала',
          wsearch_hint: 'Имя автора',
          bio: 'Биография',
          gallery: 'Галерея',
          video: 'Видео',
          place_of_birth: 'Место рождения'
        }
      },
      en:{
        translation: {
          about: 'About our webpage',
          about_description: 'This webpage contains information about Belarusian writers. The main page contains information about the writer of the day and a description of the portal development team. The portal also contains a personal page for each writer. Each page contains a description of the figure: a biography, a photo gallery with his images and images of his works, a YouTube video about the figure, his place of birth on the map.',
          navB_List: 'List',
          navB_Main: 'Home',
          dev1_fio: 'Artyom Dan\'ko',
          dev1_descr: 'Hello, world! This is text about me.',
          dev2_fio: 'Andrew Nesteruk',
          dev2_descr: 'Hello, world! This is text about me.',
          day_author: 'Figure of the day',
          inform:'INFORMATION',
          wsearch: 'Writers search',
          wsearch_hint: 'Author name',
          bio: 'Biography',
          gallery: 'Gallery',
          video: 'Video',
          place_of_birth: 'Place of birth'
        }
      }
    }
  })