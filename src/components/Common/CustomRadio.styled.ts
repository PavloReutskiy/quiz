import styled from 'styled-components';

export const CustomRadio = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 20px;
  top: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0) translateY(-50%);
  opacity: 0;
`;
