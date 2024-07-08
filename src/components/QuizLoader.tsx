import { FC } from 'react';
import styled from 'styled-components';
import useQuizLoaderAnimation from '@/hooks/useQuizLoaderAnimation';

const LOADER_SIZE = 252;
const STROKE_WIDTH = 12;
const DURATION = 5000;

const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  width: ${LOADER_SIZE}px;
  height: ${LOADER_SIZE}px;
`;

const LoaderSVG = styled.svg`
  width: 100%;
  height: 100%;
  shape-rendering: auto;
`;

const LoaderCircleBG = styled.circle`
  fill: none;
  stroke: #e8eaf2;
  stroke-width: ${STROKE_WIDTH}px;
`;

const LoaderCircleProgress = styled.circle`
  fill: none;
  stroke: #e4229c;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-width: ${STROKE_WIDTH}px;
`;

const LoaderPercentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 52px;
  color: #fff;
`;

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
