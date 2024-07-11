import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useForm } from 'react-hook-form';
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

const Question2 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('gender');
  const { t } = useTranslation();
  const genders = [
    ['Female', '👩'],
    ['Male', '👨'],
    ['Other', '😉'],
  ];

  const { register, watch } = useForm<GenderSchema>({
    resolver: zodResolver(genderSchema),
  });

  const selectedGender = watch('gender');

  useEffect(() => {
    if (selectedGender) {
      // Delay navigation to allow the animation to complete
      setTimeout(() => {
        setItem(selectedGender);
        navigate('/quiz/3');
      }, 300);
    }
  }, [selectedGender, navigate, setItem]);

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
      <Heading>{t('Question2.heading')}</Heading>
      <SubHeading marginBottom="44">{t('Question2.subHeading')}</SubHeading>

      <form>
        <OptionsContainer direction="row">
          {genders.map((gender) => (
            <GenderRadioInput
              key={gender[0]}
              value={gender[0]}
              icon={gender[1]}
              register={register}
            />
          ))}
        </OptionsContainer>
      </form>
    </motion.div>
  );
};

export default Question2;
