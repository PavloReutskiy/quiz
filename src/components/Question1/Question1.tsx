import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSchema, languageSchema } from './languageSchema';
import { Heading, RadioContainer, SubHeading } from './Question1.styled';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getLocaleFromLanguage } from '@/utils/getLocaleFromLanguage';
import RadioInput from './RadioInput/RadioInput';

const Question1 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('language');
  const { t, i18n } = useTranslation();
  const languages = ['English', 'French', 'German', 'Spanish'];

  const { register, watch } = useForm<LanguageSchema>({
    resolver: zodResolver(languageSchema),
  });

  const selectedLanguage = watch('language');

  useEffect(() => {
    if (selectedLanguage) {
      // Delay navigation to allow the animation to complete
      setTimeout(() => {
        setItem(selectedLanguage);
        navigate('/quiz/2');
        i18n.changeLanguage(getLocaleFromLanguage(selectedLanguage));
      }, 300);
    }
  }, [selectedLanguage, navigate]);

  const animations = {
    initial: { x: '100%', opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading>{t('Question1.heading')}</Heading>
      <SubHeading>{t('Question1.subHeading')}</SubHeading>

      <form>
        <RadioContainer>
          {languages.map((language) => (
            <RadioInput
              key={language}
              language={language}
              register={register}
            />
          ))}
        </RadioContainer>
      </form>
    </motion.div>
  );
};

export default Question1;
