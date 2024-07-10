import { DefaultRadio } from '@/components/Common/DefaultRadio.styled';
import styled from 'styled-components';

export const Label = styled.label`
  min-height: 60px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 16px;
  padding: 20px 12px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;

  &:has(${DefaultRadio}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition:
      border 0.2s ease-in,
      background-color 0.2s ease-in;
  }

  &:has(${DefaultRadio}:checked) div {
    transform: scale(1);
    opacity: 1;
    transition:
      transform 0.2s ease-in,
      opacity 0.2s ease-in;
  }
`;
