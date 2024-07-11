import styled from 'styled-components';

export const Button = styled.button`
  min-height: 56px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 28px;
  pointer-events: auto;
  opacity: 1;
  transition: opacity 0.2s ease-in;

  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;
