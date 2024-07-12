import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import {
  options18,
  options30,
  options40,
  options50,
} from '@/constants/topicsByAge';
import { useTranslation } from 'react-i18next';

export const useTopicsByAge = () => {
  const { t } = useTranslation();
  const { getItem } = useLocalStorage('age');

  const age = getItem();

  return useMemo(() => {
    switch (age) {
      case t('Question3.18-29 years'):
        return options18;
      case t('Question3.30-39 years'):
        return options30;
      case t('Question3.40-49 years'):
        return options40;
      case t('Question3.50+'):
        return options50;
      default:
        return options18;
    }
  }, [age]);
};
