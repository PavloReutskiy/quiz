import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CheckedIcon from '@/assets/checked.svg';
import styled from 'styled-components';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Heading = styled.h1<{ fontWeight?: string; fontSize?: string }>`
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  font-size: ${({ fontSize }) => fontSize || '28px'};
  text-align: center;
  margin-bottom: 16px;
  line-height: 34px;
`;

const SubHeading = styled.p`
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  margin-bottom: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.subHeading};
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RadioInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

const Label = styled.label`
  min-height: 60px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 16px;
  padding: 20px 12px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;

  &:has(${RadioInput}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition:
      border 0.2s ease-in,
      background-color 0.2s ease-in;
  }

  &:has(${RadioInput}:checked) div {
    transform: scale(1);
    opacity: 1;
    transition:
      transform 0.2s ease-in,
      opacity 0.2s ease-in;
  }
`;

const CustomRadio = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 12px;
  top: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  opacity: 0;
`;

const languageSchema = z.object({
  language: z.enum(['English', 'French', 'German', 'Spanish']),
});

type LanguageSchema = z.infer<typeof languageSchema>;

const Question1 = () => {
  const navigate = useNavigate();

  const { register, watch } = useForm<LanguageSchema>({
    resolver: zodResolver(languageSchema),
  });

  const selectedLanguage = watch('language');

  useEffect(() => {
    if (selectedLanguage) {
      setTimeout(() => {
        localStorage.setItem('language', selectedLanguage);
        navigate('/quiz/2');
      }, 300);
    }
  }, [selectedLanguage, navigate]);

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
      <Heading>What is your preferred language?</Heading>
      <SubHeading>Choose language</SubHeading>

      <form>
        <RadioContainer>
          <Label htmlFor="english">
            <RadioInput
              {...register('language')}
              type="radio"
              value="English"
              id="english"
            />
            <CustomRadio>
              <CheckedIcon />
            </CustomRadio>
            English
          </Label>

          <Label htmlFor="french">
            <RadioInput
              {...register('language')}
              type="radio"
              value="French"
              id="french"
            />
            <CustomRadio>
              <CheckedIcon />
            </CustomRadio>
            French
          </Label>

          <Label htmlFor="german">
            <RadioInput
              {...register('language')}
              type="radio"
              value="German"
              id="german"
            />
            <CustomRadio>
              <CheckedIcon />
            </CustomRadio>
            German
          </Label>

          <Label htmlFor="spanish">
            <RadioInput
              {...register('language')}
              type="radio"
              value="Spanish"
              id="spanish"
            />
            <CustomRadio>
              <CheckedIcon />
            </CustomRadio>
            Spanish
          </Label>
        </RadioContainer>
      </form>
    </motion.div>
  );
};

export default Question1;
