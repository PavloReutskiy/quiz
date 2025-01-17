import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 60px;
  padding-bottom: 45px;
  max-width: 600px;
  margin-inline: auto;

  @media (min-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0px;
  top: 60px;
  width: 24px;
  height: 24px;
`;
