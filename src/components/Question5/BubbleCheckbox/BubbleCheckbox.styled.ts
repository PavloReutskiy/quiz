import { keyframes, styled } from 'styled-components';
import { DefaultCheckbox } from '@/components/Common/DefaultCheckbox.styled';

const bubbleUp = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`;

const bubbleDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
`;

export const Label = styled.label`
  min-height: 88px;
  min-width: 88px;
  background-color: ${({ theme }) => theme.colors.optionBg};
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 5px;

  &:nth-child(4n + 3),
  &:nth-child(4n + 4) {
    margin-top: 24px;
  }

  &:nth-child(6n + 1) {
    animation: ${bubbleDown} 3s ease-in-out infinite;
  }
  &:nth-child(6n + 3) {
    animation: ${bubbleDown} 3s ease-in-out 1s infinite;
  }
  &:nth-child(6n + 5) {
    animation: ${bubbleDown} 3s ease-in-out 2s infinite;
  }

  &:nth-child(6n + 2) {
    animation: ${bubbleUp} 3s ease-in-out infinite;
  }
  &:nth-child(6n + 4) {
    animation: ${bubbleUp} 3s ease-in-out 1s infinite;
  }
  &:nth-child(6n + 6) {
    animation: ${bubbleUp} 3s ease-in-out 2s infinite;
  }

  & > span:last-child {
    max-width: 67px;
  }

  &:has(${DefaultCheckbox}:checked) {
    background-color: ${({ theme }) => theme.colors.optionSelectedBg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition:
      border 0.2s ease-in,
      background-color 0.2s ease-in;
  }

  @media (min-width: 600px) {
    min-height: 110px;
    min-width: 110px;
    font-size: 16px;
  }
`;
