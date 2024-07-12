import { useLocalStorage } from '@/hooks/useLocalStorage';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Heading } from '@/components/Common/Heading.styled';
import { SubHeading } from '@/components/Common/SubHeading.styled';
import { Button } from '@/components/Common/Button.styled';
import { Form } from '@/components/Common/Form.styled';
import { useTopicsByAge } from '@/hooks/useTopicsByAge';
import { animations } from './constants';
import BubbleCheckbox from './BubbleCheckbox/BubbleCheckbox';
import { TopicsSchema, topicsSchema } from './topicsSchema';
import { GridContainer } from './Question5.styled';

const Question5 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('topics');
  const options = useTopicsByAge();
  const { t } = useTranslation();

  const topics = Object.keys(options);

  const methods = useForm<TopicsSchema>({
    resolver: zodResolver(topicsSchema),
  });

  const { handleSubmit, formState } = methods;

  const onSubmit = (data: FieldValues) => {
    const valuesToSave = Object.keys(options)
      .filter((option) => data[option])
      .map((option) => t(`Question5.${option}`));

    // Delay navigation to allow the animation to complete
    setTimeout(() => {
      setItem(valuesToSave);
      navigate('/loader');
    }, 300);
  };

  return (
    <motion.div variants={animations} initial="initial" animate="animate">
      <Heading>{t('Question5.heading')}</Heading>
      <SubHeading>{t('Question5.subHeading')}</SubHeading>

      <FormProvider {...methods}>
        <Form topIndent="281" onSubmit={handleSubmit(onSubmit)}>
          <GridContainer>
            {topics.map((topic) => (
              <BubbleCheckbox key={topic} value={topic} />
            ))}
          </GridContainer>
          <Button disabled={formState.isSubmitting || !formState.isValid}>
            {t('Question5.next')}
          </Button>
        </Form>
      </FormProvider>
    </motion.div>
  );
};

export default Question5;
