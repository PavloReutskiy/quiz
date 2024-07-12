import styled from 'styled-components';

export const Form = styled.form<{ topIndent?: string }>`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${({ topIndent }) => `${topIndent}px`});
  padding-bottom: 20px;
  position: relative;

  @media (min-width: 768px) {
    height: calc(85vh - ${({ topIndent }) => `${topIndent}px`});
  }
`;
