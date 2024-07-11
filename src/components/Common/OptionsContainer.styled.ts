import styled from 'styled-components';

export const OptionsContainer = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: 12px;
  margin-bottom: 26px;
`;
