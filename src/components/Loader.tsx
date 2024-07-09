import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const squareAnim = keyframes`
  0%, 100% {
    height: 60px;
    background-color: var(--base-color);
  }
  20%, 80% {
    height: 60px;
  }
  40% {
    height: 80px;
    background-color: var(--primary-color);
  }
`;

const SpinnerSquare = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 80px;
`;

const Square = styled.div<{ delay: string }>`
  width: 17px;
  height: 60px;
  margin: auto;
  border-radius: 4px;
  animation: ${squareAnim} 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95)
    ${({ delay }) => delay} infinite;

  --primary-color: ${({ theme }) => theme.colors.primary};
  --base-color: ${({ theme }) => theme.colors.optionSelectedBg};
`;

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
