import { FC } from 'react';
import { SpinnerSquare, Square } from './Loader.styled';

const Loader: FC = () => {
  return (
    <SpinnerSquare>
      <Square delay="0s" />
      <Square delay="200ms" />
      <Square delay="400ms" />
    </SpinnerSquare>
  );
};

export default Loader;
