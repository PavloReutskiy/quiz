const quizLocalStorageKeys = [
  'language',
  'topics',
  'email',
  'age',
  'gender',
  'hate',
];

export const clearLocalStorage = () => {
  quizLocalStorageKeys.forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
    }
  });
};
