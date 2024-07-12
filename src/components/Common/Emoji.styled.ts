import { styled } from 'styled-components';

export const Emoji = styled.span<{
  size?: { mobile?: string; tablet?: string };
  margin?: string;
}>`
  display: inline-block;
  width: ${({ size }) => `${size?.mobile || 52}px`};
  height: ${({ size }) => `${size?.mobile || 52}px`};
  font-size: ${({ size }) => `${size?.mobile || 52}px`};
  line-height: ${({ size }) => `${size?.mobile || 52}px`};
  margin-bottom: ${({ margin }) => `${margin || 16}px`};

  @media (min-width: 768px) {
    width: ${({ size }) => `${size?.tablet || 72}px`};
    height: ${({ size }) => `${size?.tablet || 72}px`};
    font-size: ${({ size }) => `${size?.tablet || 72}px`};
    line-height: ${({ size }) => `${size?.tablet || 72}px`};
  }
`;
