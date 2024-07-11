import { Container } from '@/components/Common/Container.styled';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { animations } from './constants';
import { Heading } from '@/components/Common/Heading.styled';
import { SubHeading } from '@/components/Common/SubHeading.styled';
import { Button } from '@/components/Common/Button.styled';
import { Form } from '@/components/Common/Form.styled';
import { EmailInput, ErrorText, Wrapper, Text } from './EmailPage.styled';
import { EmailSchema, emailSchema } from './emailSchema';

const EmailPage = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage('email');
  const { t } = useTranslation();

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
            {...register('email')}
            placeholder={t('Email.placeholder')}
            isValid={isValid}
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
