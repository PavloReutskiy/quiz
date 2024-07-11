import { useLocalStorage } from '@/hooks/useLocalStorage';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Heading } from './Common/Heading.styled';
import { OptionsContainer } from '@/components/Common/OptionsContainer.styled';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { DefaultCheckbox } from '@/components/Common/DefaultCheckbox.styled';
import CheckedIcon from '@/assets/checked.svg';

const Label = styled.label`
  min-height: 76px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  display: flex;
  align-items: center;
  transition:
    border 0.2s ease-in,
    background-color 0.2s ease-in;

  &:has(${DefaultCheckbox}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

const CustomCheckbox = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.checkboxBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 27px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in;

  ${DefaultCheckbox}:checked + & {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & > svg {
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }

  ${DefaultCheckbox}:checked + & > svg {
    opacity: 1;
  }
`;

const Button = styled.button`
  min-height: 56px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 28px;
  pointer-events: auto;
  opacity: 1;
  transition: opacity 0.2s ease-in;

  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

const Question4 = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('hate');
  const { t } = useTranslation();

  const options = {
    logic: 'Lack of logic',
    speed: 'A slow speed',
    humor: 'Lack of humor',
    ending: 'Way too generic ending',
  };

  const dislikes = Object.keys(options);

  const hasAtLeastOneTrue = (values: FieldValues) => {
    return Object.values(values).some((value) => value === true);
  };

  const dislikesSchema = z
    .object({
      logic: z.boolean(),
      speed: z.boolean(),
      humor: z.boolean(),
      ending: z.boolean(),
    })
    .refine(hasAtLeastOneTrue);

  type DislikesSchema = z.infer<typeof dislikesSchema>;

  // const hasOneToManyTrue = (values, min, max) => {
  //   const trueCount = Object.values(values).filter(value => value === true).length;
  //   return trueCount >= min && trueCount <= max;
  // };

  // const dislikesSchema = z.object({
  //   logic: z.boolean(),
  //   speed: z.boolean(),
  //   humor: z.boolean(),
  //   ending: z.boolean(),
  // }).refine(data => validateBooleanCount(data, 1, 3));

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<DislikesSchema>({
    resolver: zodResolver(dislikesSchema),
  });

  const onSubmit = (data: FieldValues) => {
    const valuesToSave = Object.entries(options)
      .filter(([key, _]) => data[key])
      .map(([_, value]) => value);

    setTimeout(() => {
      setItem(valuesToSave);
      navigate('/quiz/5');
    }, 300);
  };

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
      <Heading marginBottom="24">
        <Trans i18nKey="Question4.heading">
          What do you <span>hate</span> the most in a book?
        </Trans>
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <OptionsContainer>
          {dislikes.map((dislike) => (
            <Label key={dislike} htmlFor={dislike}>
              <DefaultCheckbox
                {...register(dislike as keyof DislikesSchema)}
                id={dislike}
              />
              <CustomCheckbox>
                <CheckedIcon />
              </CustomCheckbox>
              {t(`Question4.${dislike}`)}
            </Label>
          ))}
        </OptionsContainer>
        <Button disabled={isSubmitting || !isValid}>
          {t('Question4.next')}
        </Button>
      </form>
    </motion.div>
  );
};

export default Question4;
