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
`;

export const Emoji = styled.span`
  display: inline-block;
  width: 52px;
  height: 52px;
  font-size: 52px;
  line-height: 52px;
  margin-bottom: 16px;
`;
