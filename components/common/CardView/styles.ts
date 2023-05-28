import styled from 'styled-components';

export const CardViewContainer = styled.div`
  width: 100%;
`;

export const CardItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px -18px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 12px;
  }
`;

export const CardItemContainer = styled.div`
  width: 50%;
  padding: 16px 18px;

  @media (max-width: 1024px) {
    padding: 0;
    width: 100%;
  }
`;
