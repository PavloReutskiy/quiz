import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSchema, languageSchema } from './languageSchema';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getLocaleFromLanguage } from '@/utils/getLocaleFromLanguage';
import CustomRadioInput from '@/components/Common/CustomRadioInput/CustomRadioInput';
import { Heading } from '@/components/Common/Heading.styled';
import { SubHeading } from '@/components/Common/SubHeading.styled';
import { OptionsContainer } from '@/components/Common/OptionsContainer.styled';
import { languages } from './constants';
import { RoutePath } from '@/router/routes';
import { routesAnimation } from '@/constants/routesAnimation';

const Question1 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('language');
  const { t, i18n } = useTranslation();

  const methods = useForm<LanguageSchema>({
    resolver: zodResolver(languageSchema),
  });

  const selectedLanguage = methods.watch('language');

  useEffect(() => {
    if (selectedLanguage) {
      setTimeout(() => {
        setItem(selectedLanguage);
        navigate(`/${RoutePath.QUIZ}/2`);
        i18n.changeLanguage(getLocaleFromLanguage(selectedLanguage));
      }, 300);
    }
  }, [selectedLanguage, navigate, i18n, setItem]);

  return (
    <motion.div
      variants={routesAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading>{t('Question1.heading')}</Heading>
      <SubHeading>{t('Question1.subHeading')}</SubHeading>

      <FormProvider {...methods}>
        <form>
          <OptionsContainer>
            {languages.map((language) => (
              <CustomRadioInput
                key={language}
                value={language}
                dictionary="Question1"
                type="language"
              />
            ))}
          </OptionsContainer>
        </form>
      </FormProvider>
    </motion.div>
  );
};

export default Question1;
