import styled from 'styled-components';
import { DefaultCheckbox } from '@/components/Common/DefaultCheckbox.styled';

export const Label = styled.label`
  min-height: 76px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  display: flex;
  align-items: center;
  transition:
    border 0.2s ease-in,
    background-color 0.2s ease-in;

  &:has(${DefaultCheckbox}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 768px) {
    min-height: 100px;
    font-size: 24px;
  }
`;

export const CustomCheckbox = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.checkboxBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 27px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in;

  ${DefaultCheckbox}:checked + & {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & > svg {
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }

  ${DefaultCheckbox}:checked + & > svg {
    opacity: 1;
  }
`;
