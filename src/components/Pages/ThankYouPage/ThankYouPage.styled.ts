import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  padding-top: 145px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Heading = styled.h1`
  font-family: 'Niconne', cursive;
  font-weight: 400;
  font-style: normal;
  text-align: center;
`;

export const SubHeading = styled.p`
  text-align: center;
  margin-bottom: 82px;
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
`;
