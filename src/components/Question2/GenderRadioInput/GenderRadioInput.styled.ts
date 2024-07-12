import styled from 'styled-components';
import { DefaultRadio } from '@/components/Common/DefaultRadio.styled';

export const Label = styled.label`
  min-height: 144px;
  min-width: 101px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 12px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:has(${DefaultRadio}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition:
      border 0.2s ease-in,
      background-color 0.2s ease-in;
  }

  @media (min-width: 768px) {
    min-height: 250px;
    min-width: 180px;
    font-size: 24px;
  }
`;
