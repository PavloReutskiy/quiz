import styled from 'styled-components';

export const Heading = styled.h1<{ fontWeight?: string; fontSize?: string }>`
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  font-size: ${({ fontSize }) => fontSize || '28px'};
  text-align: center;
  margin-bottom: 16px;
  line-height: 34px;
`;

export const SubHeading = styled.p`
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  margin-bottom: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.subHeading};
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
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

  &:has(${RadioInput}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition:
      border 0.2s ease-in,
      background-color 0.2s ease-in;
  }

  &:has(${RadioInput}:checked) div {
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
