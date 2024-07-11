import { keyframes, styled } from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const fade = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

export const Text = styled.div`
  text-align: center;
  margin-inline: auto;
  animation: ${fade} 2s infinite;
`;

const dotAnimation = keyframes`
  0% {
    content: '';
  }
  33% {
    content: '.';
  }
  66% {
    content: '..';
  }
  100% {
    content: '...';
  }
`;

export const AnimatedDots = styled.span`
  display: inline-block;
  text-align: left;
  min-width: 15px;
  &:after {
    content: '';
    animation: ${dotAnimation} 2s infinite;
  }
`;
