// src/i18n.js
import i18n from 'i18next'; // Importa i18next directamente
import { initReactI18next } from 'react-i18next';

// Importa las traducciones para inglés y español
import enTranslation from './locales/en/welcome.json';
import esTranslation from './locales/es/bienvenidos.json'; 


// Configura i18next
i18n
  .use(initReactI18next) // Conecta react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // Traducciones en inglés
      },
      es: {
        translation: esTranslation, // Traducciones en español
      },
    },
    lng: 'en', // Idioma por defecto: inglés
    fallbackLng: 'es', // Idioma de respaldo
    interpolation: {
      escapeValue: false, // React maneja la seguridad por defecto
    },
  });

// Exporta la configuración de i18n
export default i18n;