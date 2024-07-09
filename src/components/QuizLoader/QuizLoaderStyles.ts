import styled from 'styled-components';
import { LOADER_SIZE, STROKE_WIDTH } from './constants';

export const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  width: ${LOADER_SIZE}px;
  height: ${LOADER_SIZE}px;
`;

export const LoaderSVG = styled.svg`
  width: 100%;
  height: 100%;
  shape-rendering: auto;
`;

export const LoaderCircleBG = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.loaderBg};
  stroke-width: ${STROKE_WIDTH}px;
`;

export const LoaderCircleProgress = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-width: ${STROKE_WIDTH}px;
`;

export const LoaderPercentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 52px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`;
