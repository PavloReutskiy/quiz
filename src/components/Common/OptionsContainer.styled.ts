import styled from 'styled-components';

export const OptionsContainer = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: 12px;
  margin-bottom: 26px;
  max-width: 600px;
  width: 100%;
  margin-inline: auto;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;
