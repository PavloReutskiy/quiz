import { FC } from 'react';
import { ProgressBarContainer, StyledProgressBar } from './ProgressBar.styled';

type Props = {
  width: number;
  prevWidth: number;
};

const ProgressBar: FC<Props> = ({ width, prevWidth }) => {
  return (
    <ProgressBarContainer>
      <StyledProgressBar
        initial={{ width: `${prevWidth}%` }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 0.3 }}
        width={width}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
