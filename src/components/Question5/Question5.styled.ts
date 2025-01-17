import { styled } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 88px);
  grid-auto-flow: column;
  grid-auto-columns: 88px;
  gap: 8px;
  height: 208px;
  overflow-x: auto;
  margin-right: -20px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 600px) {
    grid-template-rows: repeat(2, 110px);
    grid-auto-columns: 110px;
    height: 280px;
  }
`;
