import { useLocalStorage } from '@/hooks/useLocalStorage';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Heading } from '@/components/Common/Heading.styled';
import { SubHeading } from '@/components/Common/SubHeading.styled';
import { motion } from 'framer-motion';
import { OptionsContainer } from '@/components/Common/OptionsContainer.styled';
import { GenderSchema, genderSchema } from './genderSchema';
import GenderRadioInput from './GenderRadioInput/GenderRadioInput';
import { genders } from './constants';
import { RoutePath } from '@/router/routes';
import { routesAnimation } from '@/constants/routesAnimation';

const Question2 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('gender');
  const { t } = useTranslation();

  const methods = useForm<GenderSchema>({
    resolver: zodResolver(genderSchema),
  });

  const selectedGender = methods.watch('gender');

  useEffect(() => {
    if (selectedGender) {
      setTimeout(() => {
        setItem(selectedGender);
        navigate(`/${RoutePath.QUIZ}/3`);
      }, 300);
    }
  }, [selectedGender, navigate, setItem]);

  return (
    <motion.div
      variants={routesAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading>{t('Question2.heading')}</Heading>
      <SubHeading marginBottom="44">{t('Question2.subHeading')}</SubHeading>

      <FormProvider {...methods}>
        <form>
          <OptionsContainer direction="row">
            {genders.map((gender) => (
              <GenderRadioInput
                key={gender[0]}
                value={gender[0]}
                icon={gender[1]}
              />
            ))}
          </OptionsContainer>
        </form>
      </FormProvider>
    </motion.div>
  );
};

export default Question2;
