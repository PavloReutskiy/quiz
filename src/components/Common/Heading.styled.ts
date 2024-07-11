import styled from 'styled-components';

export const Heading = styled.h1<{
  fontWeight?: string;
  fontSize?: string;
  marginBottom?: string;
}>`
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  font-size: ${({ fontSize }) => `${fontSize || 27}px`};
  text-align: center;
  margin-bottom: ${({ marginBottom }) => `${marginBottom || 16}px`};
  line-height: 34px;

  & span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
