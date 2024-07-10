import styled from 'styled-components';

export const Heading = styled.h1<{ fontWeight?: string; fontSize?: string }>`
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  font-size: ${({ fontSize }) => `${fontSize || 28}px`};
  text-align: center;
  margin-bottom: 16px;
  line-height: 34px;
`;
