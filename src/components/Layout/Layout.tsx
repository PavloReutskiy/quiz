import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { Container } from '@/components/Common/Container.styled';
import { FC } from 'react';
import BackArrow from '@/assets/back-arrow.svg';
import { TOTAL_QUESTIONS } from './constants';
import QuestionNumber from './QuestionNumber/QuestionNumber';
import ProgressBar from './ProgressBar/ProgressBar';
import { BackButton, Wrapper } from './Layout.styled';

const Layout: FC = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const navigate = useNavigate();
  const questionNumber = Number(questionId);
  const progressBarWidth = ((questionNumber - 1) / TOTAL_QUESTIONS) * 100;

  const handleBack = () => {
    if (questionNumber > 2) {
      navigate(`/quiz/${questionNumber - 1}`);
    }
  };

  return (
    <Container>
      <Wrapper>
        {questionNumber > 2 && (
          <BackButton onClick={handleBack}>
            <BackArrow />
          </BackButton>
        )}
        <QuestionNumber questionNumber={questionNumber} />
        <ProgressBar width={progressBarWidth} />
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Layout;
