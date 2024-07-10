import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { LanguageSchema, languageSchema } from './languageSchema';
import CheckedIcon from '@/assets/checked.svg';
import {
  CustomRadio,
  Heading,
  Label,
  RadioContainer,
  RadioInput,
  SubHeading,
} from './Question1.styled';

const Question1 = () => {
  const navigate = useNavigate();

  const { register, watch } = useForm<LanguageSchema>({
    resolver: zodResolver(languageSchema),
  });

  const selectedLanguage = watch('language');

  useEffect(() => {
    if (selectedLanguage) {
      setTimeout(() => {
        localStorage.setItem('language', selectedLanguage);
        navigate('/quiz/2');
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

  const languages = ['English', 'French', 'German', 'Spanish'];

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading>What is your preferred language?</Heading>
      <SubHeading>Choose language</SubHeading>

      <form>
        <RadioContainer>
          {languages.map((language) => (
            <Label key={language} htmlFor={language.toLowerCase()}>
              <RadioInput
                {...register('language')}
                value={language}
                id={language.toLowerCase()}
              />
              <CustomRadio>
                <CheckedIcon />
              </CustomRadio>
              {language}
            </Label>
          ))}
        </RadioContainer>
      </form>
    </motion.div>
  );
};

export default Question1;
