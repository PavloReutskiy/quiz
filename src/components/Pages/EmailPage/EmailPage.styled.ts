import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  padding-top: 125px;
`;

export const EmailInput = styled.input<{ isValid?: boolean }>`
  min-height: 76px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.optionBg};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 20px;
  border: 2px solid transparent;
  margin-bottom: 56px;
  max-width: 600px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  transition:
    border 0.2s ease-in,
    background-color 0.2s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.emailPlaceholder};
    vertical-align: middle;
    font-size: 17px;
    font-weight: 500;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.emailFocusBorder};
  }

  &:focus,
  &:not(:placeholder-shown) {
    background-color: ${({ theme }) => theme.colors.emailFocusBg};
    border: 2px solid
      ${({ theme, isValid }) =>
        isValid ? theme.colors.emailFocusBorder : theme.colors.emailInvalid};
  }

  /* @media (min-width: 768px) {
    max-width: 600px;
    margin-inline: auto;
  } */
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.emailInvalid};
  font-size: 12px;
  position: absolute;
  top: 86px;
  left: 20px;

  @media (min-width: 768px) {
    left: 65px;
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.subHeading};
  max-width: 270px;
  margin-inline: auto;

  & span {
    color: ${({ theme }) => theme.colors.emailFocusBorder};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    max-width: 350px;
  }
`;
