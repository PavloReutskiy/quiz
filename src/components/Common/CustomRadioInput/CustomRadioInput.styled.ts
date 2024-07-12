import { DefaultRadio } from '@/components/Common/DefaultRadio.styled';
import styled from 'styled-components';

export const Label = styled.label<{ height?: string }>`
  min-height: ${({ height }) => `${height || 60}px`};
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  display: flex;
  align-items: center;

  &:has(${DefaultRadio}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition:
      border 0.2s ease-in,
      background-color 0.2s ease-in;
  }

  &:has(${DefaultRadio}:checked) div {
    transform: scale(1) translateY(-50%);
    opacity: 1;
    transition:
      transform 0.2s ease-in,
      opacity 0.2s ease-in;
  }

  @media (min-width: 768px) {
    min-height: 100px;
    font-size: 24px;
  }
`;
