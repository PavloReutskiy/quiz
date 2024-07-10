const languageMap: { [key: string]: string } = {
  English: 'en',
  French: 'fr',
  German: 'de',
  Spanish: 'es',
};

export const getLocaleFromLanguage = (language: string): string => {
  return languageMap[language] || 'en';
};
