import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProgressBarContainer = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.loaderBg};
  overflow: hidden;
`;

export const StyledProgressBar = styled(motion.div)<{ width: number }>`
  height: 100%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ width }) => width}%;
`;
