import { useLocalStorage } from '@/hooks/useLocalStorage';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Heading } from '@/components/Common/Heading.styled';
import { OptionsContainer } from '@/components/Common/OptionsContainer.styled';
import CustomRadioInput from '@/components/Common/CustomRadioInput/CustomRadioInput';
import { AgeSchema, ageSchema } from './ageSchema';
import { ages } from './constants';
import { RoutePath } from '@/router/routes';
import { routesAnimation } from '@/constants/routesAnimation';

const Question3 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('age');
  const { t } = useTranslation();

  const methods = useForm<AgeSchema>({
    resolver: zodResolver(ageSchema),
  });

  const selectedAge = methods.watch('age');

  useEffect(() => {
    if (selectedAge) {
      setTimeout(() => {
        setItem(selectedAge);
        navigate(`/${RoutePath.QUIZ}/4`);
      }, 300);
    }
  }, [selectedAge, navigate, setItem]);

  return (
    <motion.div
      variants={routesAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading marginBottom="24">{t('Question3.heading')}</Heading>

      <FormProvider {...methods}>
        <form>
          <OptionsContainer>
            {ages.map((age) => (
              <CustomRadioInput
                key={age}
                value={age}
                dictionary="Question3"
                type="age"
                height="76"
              />
            ))}
          </OptionsContainer>
        </form>
      </FormProvider>
    </motion.div>
  );
};

export default Question3;
