import styled, { css } from 'styled-components';

export const Container = styled.div<{ flex?: boolean }>`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 768px;
  height: 100vh;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;
