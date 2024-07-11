import { useLocalStorage } from '@/hooks/useLocalStorage';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Heading } from '@/components/Common/Heading.styled';
import { OptionsContainer } from '@/components/Common/OptionsContainer.styled';
import { motion } from 'framer-motion';
import CustomCheckboxInput from './CustomCheckboxInput/CustomCheckboxInput';
import { Button } from '@/components/Common/Button.styled';
import { DislikesSchema, dislikesSchema } from './dislikesSchema';
import { animations, options } from './constants';

const Question4 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('hate');
  const { t } = useTranslation();

  const dislikes = Object.keys(options);

  const methods = useForm<DislikesSchema>({
    resolver: zodResolver(dislikesSchema),
  });

  const onSubmit = (data: FieldValues) => {
    const valuesToSave = Object.entries(options)
      .filter(([key, _]) => data[key])
      .map(([_, value]) => value);

    // Delay navigation to allow the animation to complete
    setTimeout(() => {
      setItem(valuesToSave);
      navigate('/quiz/5');
    }, 300);
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading marginBottom="24">
        <Trans i18nKey="Question4.heading">
          What do you <span>hate</span> the most in a book?
        </Trans>
      </Heading>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <OptionsContainer>
            {dislikes.map((dislike) => (
              <CustomCheckboxInput key={dislike} value={dislike} />
            ))}
          </OptionsContainer>
          <Button
            disabled={
              methods.formState.isSubmitting || !methods.formState.isValid
            }
          >
            {t('Question4.next')}
          </Button>
        </form>
      </FormProvider>
    </motion.div>
  );
};

export default Question4;
