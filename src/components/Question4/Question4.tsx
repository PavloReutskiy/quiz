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
import { options } from './constants';
import { Form } from '@/components/Common/Form.styled';
import { RoutePath } from '@/router/routes';
import { routesAnimation } from '@/constants/routesAnimation';

const Question4 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('hate');
  const { t } = useTranslation();

  const methods = useForm<DislikesSchema>({
    resolver: zodResolver(dislikesSchema),
  });
  const { handleSubmit, formState } = methods;

  const onSubmit = (data: FieldValues) => {
    const valuesToSave = options
      .filter((option) => data[option])
      .map((option) => t(`Question4.${option}`));

    setTimeout(() => {
      setItem(valuesToSave);
      navigate(`/${RoutePath.QUIZ}/5`);
    }, 300);
  };

  return (
    <motion.div
      variants={routesAnimation}
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
        <Form topIndent="241" onSubmit={handleSubmit(onSubmit)}>
          <OptionsContainer>
            {options.map((dislike) => (
              <CustomCheckboxInput key={dislike} value={dislike} />
            ))}
          </OptionsContainer>
          <Button disabled={formState.isSubmitting || !formState.isValid}>
            {t('Question4.next')}
          </Button>
        </Form>
      </FormProvider>
    </motion.div>
  );
};

export default Question4;
