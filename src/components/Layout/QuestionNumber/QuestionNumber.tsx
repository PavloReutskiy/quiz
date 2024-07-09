import { FC } from 'react';
import { TOTAL_QUESTIONS } from '../constants';
import { StyledQuestionNumber } from './QuestionNumber.styled';

type Props = {
  questionNumber: number;
};

const QuestionNumber: FC<Props> = ({ questionNumber }) => {
  return (
    <StyledQuestionNumber>
      <span>{questionNumber}</span>
      <span>/</span>
      <span>{TOTAL_QUESTIONS}</span>
    </StyledQuestionNumber>
  );
};

export default QuestionNumber;
