import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const NotFoundMessage = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  padding: 16px;
  min-width: 150px;
  font-size: 17px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 27px;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundMessage>404 Not Found</NotFoundMessage>
      <StyledLink to="/">Home</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
