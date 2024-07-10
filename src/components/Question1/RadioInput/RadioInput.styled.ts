import styled from 'styled-components';

export const StyledRadioInput = styled.input.attrs({ type: 'radio' })`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const Label = styled.label`
  min-height: 60px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 16px;
  padding: 20px 12px;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;

  &:has(${StyledRadioInput}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition:
      border 0.2s ease-in,
      background-color 0.2s ease-in;
  }

  &:has(${StyledRadioInput}:checked) div {
    transform: scale(1);
    opacity: 1;
    transition:
      transform 0.2s ease-in,
      opacity 0.2s ease-in;
  }
`;

export const CustomRadio = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 12px;
  top: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  opacity: 0;
`;
