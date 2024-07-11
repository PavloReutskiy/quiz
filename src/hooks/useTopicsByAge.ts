import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import {
  options18,
  options30,
  options40,
  options50,
} from '@/components/Question5/constants'; // Переконайтесь, що шлях правильний

export const useTopicsByAge = () => {
  const { getItem } = useLocalStorage('age');

  const age = getItem();

  return useMemo(() => {
    switch (age) {
      case '18-29 years':
        return options18;
      case '30-39 years':
        return options30;
      case '40-49 years':
        return options40;
      case '50+':
        return options50;
      default:
        return options18;
    }
  }, [age]);
};
