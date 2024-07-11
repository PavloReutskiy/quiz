import { styled } from 'styled-components';

export const Emoji = styled.span<{ size?: string; margin?: string }>`
  display: inline-block;
  width: ${({ size }) => `${size || 52}px`};
  height: ${({ size }) => `${size || 52}px`};
  font-size: ${({ size }) => `${size || 52}px`};
  line-height: ${({ size }) => `${size || 52}px`};
  margin-bottom: ${({ margin }) => `${margin || 16}px`};
`;
