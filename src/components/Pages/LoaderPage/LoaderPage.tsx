import { Container } from '@/components/Common/Container.styled';
import QuizLoader from '../../QuizLoader/QuizLoader';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatedDots, LoaderWrapper, Text } from './LoaderPage.styled';

const LoaderPage = () => {
  const navigate = useNavigate();

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
          Finding collections for <br /> you
          <AnimatedDots />
        </Text>
      </LoaderWrapper>
    </Container>
  );
};

export default LoaderPage;
