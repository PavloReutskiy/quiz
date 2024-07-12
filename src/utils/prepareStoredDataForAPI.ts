import { quizLocalStorageKeys } from '@/constants/quizLocalStorageKeys';
import { getDataFromLocalStorage } from './getDataFromLocalStorage';

export const prepareStoredDataForAPI = () => {
  const dataToSend: { [key: string]: string } = {};
  quizLocalStorageKeys.forEach((key) => {
    const value = getDataFromLocalStorage(key);
    if (value) {
      dataToSend[key] = value;
    }
  });
  return dataToSend;
};
