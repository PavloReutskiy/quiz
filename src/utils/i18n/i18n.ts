import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/utils/i18n/locales/en.json';
import fr from '@/utils/i18n/locales/fr.json';
import de from '@/utils/i18n/locales/de.json';
import es from '@/utils/i18n/locales/es.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  es: { translation: es },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
