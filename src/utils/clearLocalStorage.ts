import { quizLocalStorageKeys } from '@/constants/quizLocalStorageKeys';

export const clearLocalStorage = () => {
  quizLocalStorageKeys.forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
    }
  });
};
