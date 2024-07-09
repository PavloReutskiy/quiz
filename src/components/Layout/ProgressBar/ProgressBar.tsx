import { FC } from 'react';
import { ProgressBarContainer, StyledProgressBar } from './ProgressBar.styled';

type Props = {
  width: number;
};

const ProgressBar: FC<Props> = ({ width }) => {
  return (
    <ProgressBarContainer>
      <StyledProgressBar
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 0.3 }}
        width={width}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
