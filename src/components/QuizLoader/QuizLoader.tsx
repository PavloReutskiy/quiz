import { FC } from 'react';
import { LOADER_SIZE, STROKE_WIDTH, DURATION } from './constants';
import {
  LoaderContainer,
  LoaderSVG,
  LoaderCircleBG,
  LoaderCircleProgress,
  LoaderPercentage,
} from './QuizLoaderStyles';
import useQuizLoaderAnimation from '@/hooks/useQuizLoaderAnimation';

const QuizLoader: FC = () => {
  const percentage = useQuizLoaderAnimation(DURATION);

  const radius = LOADER_SIZE / 2 - STROKE_WIDTH;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <LoaderContainer>
      <LoaderSVG viewBox={`0 0 ${LOADER_SIZE} ${LOADER_SIZE}`}>
        <LoaderCircleBG cx={LOADER_SIZE / 2} cy={LOADER_SIZE / 2} r={radius} />
        <LoaderCircleProgress
          cx={LOADER_SIZE / 2}
          cy={LOADER_SIZE / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </LoaderSVG>
      <LoaderPercentage>{Math.floor(percentage)}%</LoaderPercentage>
    </LoaderContainer>
  );
};

export default QuizLoader;
