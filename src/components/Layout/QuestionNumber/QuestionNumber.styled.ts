import styled from 'styled-components';

export const StyledQuestionNumber = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.loaderBg};
  text-align: center;
  margin-bottom: 17px;
  display: flex;
  justify-content: center;
  gap: 2px;

  span:nth-child(1) {
    color: ${({ theme }) => theme.colors.primary};
  }
  span:nth-child(2) {
    font-weight: 500;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 24px;

    span:nth-child(2) {
      font-size: 26px;
    }
  }
`;
