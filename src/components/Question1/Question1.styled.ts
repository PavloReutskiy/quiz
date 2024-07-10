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
