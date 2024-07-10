import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocaleFromLanguage } from '../getLocaleFromLanguage';
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

const getItem = () => {
  try {
    const language = localStorage.getItem('language');
    return language ? JSON.parse(language) : undefined;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const locale = getLocaleFromLanguage(getItem());

i18n.use(initReactI18next).init({
  resources,
  lng: locale || 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
