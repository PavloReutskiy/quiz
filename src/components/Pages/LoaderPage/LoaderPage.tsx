import { Container } from '@/components/Common/Container.styled';
import QuizLoader from '../../QuizLoader/QuizLoader';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatedDots, LoaderWrapper, Text } from './LoaderPage.styled';
import { useTranslation } from 'react-i18next';

const LoaderPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/email');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container flex>
      <LoaderWrapper>
        <QuizLoader />
        <Text>
          {t('QuestionLoader.text')}
          <AnimatedDots />
        </Text>
      </LoaderWrapper>
    </Container>
  );
};

export default LoaderPage;
