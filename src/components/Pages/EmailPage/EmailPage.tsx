import { Container } from '@/components/Common/Container.styled';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { FieldValues, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { animations } from './constants';
import { Heading } from '@/components/Common/Heading.styled';
import { SubHeading } from '@/components/Common/SubHeading.styled';
import { Button } from '@/components/Common/Button.styled';
import { styled } from 'styled-components';
import { Form } from '@/components/Common/Form.styled';

const Wrapper = styled(motion.div)`
  padding-top: 125px;
`;

const EmailInput = styled.input.attrs({ type: 'email' })<{ isValid?: boolean }>`
  min-height: 76px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.optionBg};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 20px;
  border: 2px solid transparent;
  margin-bottom: 56px;
  display: flex;
  align-items: center;
  transition:
    border 0.2s ease-in,
    background-color 0.2s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.emailPlaceholder};
    vertical-align: middle;
    font-size: 17px;
    font-weight: 500;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.emailFocusBorder};
  }

  &:focus,
  &:not(:placeholder-shown) {
    background-color: ${({ theme }) => theme.colors.emailFocusBg};
    border: 2px solid
      ${({ theme, isValid }) =>
        isValid ? theme.colors.emailFocusBorder : theme.colors.emailInvalid};
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.emailInvalid};
  font-size: 12px;
  position: absolute;
  top: 86px;
  left: 20px;
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.subHeading};
  max-width: 270px;
  margin-inline: auto;

  & span {
    color: ${({ theme }) => theme.colors.emailFocusBorder};
  }
`;

const EmailPage = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('email');
  const { t } = useTranslation();

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const emailSchema = z.object({
    email: z.string().email().regex(emailRegex),
  });

  type EmailSchema = z.infer<typeof emailSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<EmailSchema>({
    mode: 'all',
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: FieldValues) => {
    // Delay navigation to allow the animation to complete
    setTimeout(() => {
      setItem(data.email);
      navigate('/thank-you');
      reset();
    }, 300);
  };

  return (
    <Container>
      <Wrapper
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Heading>{t('Email.heading')}</Heading>
        <SubHeading marginBottom="56" fontSize="15">
          {t('Email.subHeading')}
        </SubHeading>

        <Form topIndent="252" onSubmit={handleSubmit(onSubmit)}>
          <EmailInput
            isValid={isValid}
            {...register('email')}
            placeholder={t('Email.placeholder')}
          />
          {errors.email && <ErrorText>{`${errors.email.message}`}</ErrorText>}

          <Text>
            <Trans i18nKey="Email.text">
              By continuing I agree with <span>Privacy policy</span> and
              <span>Terms of use.</span>
            </Trans>
          </Text>

          <Button disabled={isSubmitting || !isValid}>
            {t('Question4.next')}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default EmailPage;
