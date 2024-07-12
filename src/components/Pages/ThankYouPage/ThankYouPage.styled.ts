import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  padding-top: 145px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-bottom: 100px;
  }
`;

export const Heading = styled.h1`
  font-family: 'Niconne', cursive;
  font-weight: 400;
  font-style: normal;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

export const SubHeading = styled.p`
  text-align: center;
  margin-bottom: 82px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const LottieWrapper = styled.div`
  width: 110px;
  height: 110px;
  margin-inline: auto;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const DownloadBtn = styled.button`
  margin-top: auto;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.white};
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
