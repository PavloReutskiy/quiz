import styled from 'styled-components';

export const SubHeading = styled.p<{ marginBottom?: string }>`
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  margin-bottom: ${({ marginBottom }) => `${marginBottom || 24}px`};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.subHeading};
`;
