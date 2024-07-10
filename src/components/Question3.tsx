import { useLocalStorage } from '@/hooks/useLocalStorage';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Heading } from '@/components/Common/Heading.styled';
import { OptionsContainer } from '@/components/Common/OptionsContainer.styled';
import CustomRadioInput from '@/components/Common/CustomRadioInput/CustomRadioInput';
import { AgeSchema, ageSchema } from './Question3/ageSchema';

const QuizPage3 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('age');
  const { t } = useTranslation();
  const ages = ['18-29 years', '30-39 years', '40-49 years', '50+'];

  const { register, watch } = useForm<AgeSchema>({
    resolver: zodResolver(ageSchema),
  });

  const selectedAge = watch('age');

  useEffect(() => {
    if (selectedAge) {
      // Delay navigation to allow the animation to complete
      setTimeout(() => {
        setItem(selectedAge);
        navigate('/quiz/4');
      }, 300);
    }
  }, [selectedAge, navigate, setItem]);

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
      <Heading marginBottom="24">{t('Question3.heading')}</Heading>

      <form>
        <OptionsContainer>
          {ages.map((age) => (
            <CustomRadioInput
              key={age}
              value={age}
              dictionary="Question3"
              register={register}
              type="age"
              height="76"
            />
          ))}
        </OptionsContainer>
      </form>
    </motion.div>
  );
};

export default QuizPage3;
