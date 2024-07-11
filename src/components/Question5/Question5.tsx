import { useLocalStorage } from '@/hooks/useLocalStorage';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Heading } from '@/components/Common/Heading.styled';
import { SubHeading } from '@/components/Common/SubHeading.styled';
import { DefaultCheckbox } from '@/components/Common/DefaultCheckbox.styled';
import { keyframes, styled } from 'styled-components';
import { Button } from '@/components/Common/Button.styled';
import { Form } from '@/components/Common/Form.styled';
import { useTopicsByAge } from '@/hooks/useTopicsByAge';
import { animations } from './constants';

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 88px);
  grid-auto-flow: column;
  grid-auto-columns: 88px;
  gap: 8px;
  height: 208px;
  overflow-x: auto;
  margin-right: -20px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const bubbleUp = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`;

const bubbleDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
`;

const Label = styled.label`
  min-height: 88px;
  min-width: 88px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 44px;
  cursor: pointer;
  border: 2px solid transparent;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 5px;

  &:nth-child(4n + 3),
  &:nth-child(4n + 4) {
    margin-top: 24px;
  }

  &:nth-child(6n + 1) {
    animation: ${bubbleDown} 3s ease-in-out infinite;
  }
  &:nth-child(6n + 3) {
    animation: ${bubbleDown} 3s ease-in-out 1s infinite;
  }
  &:nth-child(6n + 5) {
    animation: ${bubbleDown} 3s ease-in-out 2s infinite;
  }

  &:nth-child(6n + 2) {
    animation: ${bubbleUp} 3s ease-in-out infinite;
  }
  &:nth-child(6n + 4) {
    animation: ${bubbleUp} 3s ease-in-out 1s infinite;
  }
  &:nth-child(6n + 6) {
    animation: ${bubbleUp} 3s ease-in-out 2s infinite;
  }

  & > span:last-child {
    max-width: 67px;
  }

  &:has(${DefaultCheckbox}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition:
      border 0.2s ease-in,
      background-color 0.2s ease-in;
  }
`;

const Emoji = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  font-size: 25px;
  line-height: 25px;
  margin-bottom: 5px;
  text-align: center;
`;

const Question5 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('topics');
  const options = useTopicsByAge();
  const { t } = useTranslation();

  const topics = Object.keys(options);

  const hasOneToManyTrue = (values: FieldValues, min: number, max: number) => {
    const trueCount = Object.values(values).filter(
      (value) => value === true,
    ).length;
    return trueCount >= min && trueCount <= max;
  };

  const topicsSchema = z
    .object({
      werewolf: z.boolean().optional(),
      romance: z.boolean().optional(),
      action: z.boolean().optional(),
      youngAdult: z.boolean().optional(),
      royalObsession: z.boolean().optional(),
      badBoy: z.boolean().optional(),
      billionaire: z.boolean().optional(),
      poetry: z.boolean().optional(),
      crime: z.boolean().optional(),
      horror: z.boolean().optional(),
      fantasy: z.boolean().optional(),
      biography: z.boolean().optional(),
      historicalNovel: z.boolean().optional(),
      manga: z.boolean().optional(),
      nonfiction: z.boolean().optional(),
      comics: z.boolean().optional(),
      classics: z.boolean().optional(),
      travel: z.boolean().optional(),
      scienceFiction: z.boolean().optional(),
    })
    .refine((data) => hasOneToManyTrue(data, 1, 3));

  type TopicsSchema = z.infer<typeof topicsSchema>;

  const methods = useForm<TopicsSchema>({
    resolver: zodResolver(topicsSchema),
  });

  const onSubmit = (data: FieldValues) => {
    const valuesToSave = Object.entries(options)
      // [key, [ label, emoji ]]
      .filter(([key, _]) => data[key])
      .map(([, [label]]) => label);

    // Delay navigation to allow the animation to complete
    setTimeout(() => {
      setItem(valuesToSave);
      navigate('/email');
    }, 300);
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading>{t('Question5.heading')}</Heading>
      <SubHeading>{t('Question5.subHeading')}</SubHeading>

      <Form topIndent="281" onSubmit={methods.handleSubmit(onSubmit)}>
        <GridContainer>
          {topics.map((topic) => (
            <Label key={topic} htmlFor={topic}>
              <DefaultCheckbox
                {...methods.register(topic as keyof TopicsSchema)}
                id={topic}
              />
              <Emoji>{options[topic][1]}</Emoji>
              <span>{t(`Question5.${topic}`)}</span>
            </Label>
          ))}
        </GridContainer>
        <Button
          disabled={
            methods.formState.isSubmitting || !methods.formState.isValid
          }
        >
          {t('Question5.next')}
        </Button>
      </Form>
    </motion.div>
  );
};

export default Question5;
