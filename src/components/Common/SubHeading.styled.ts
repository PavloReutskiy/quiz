import styled from 'styled-components';

export const SubHeading = styled.p<{
  marginBottom?: string;
  fontSize?: string;
}>`
  font-weight: 400;
  font-size: ${({ fontSize }) => `${fontSize || 17}px`};
  text-align: center;
  margin-bottom: ${({ marginBottom }) => `${marginBottom || 24}px`};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.subHeading};

  @media (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;
