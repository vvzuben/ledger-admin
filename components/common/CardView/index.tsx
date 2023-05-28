import React from 'react';
import { CardViewContainer, CardItems, CardItemContainer } from './styles';

interface CardViewProps {
  rows: object[];
  renderCard: any;
  init?: any;
}

const CardView: React.FC<CardViewProps> = ({ rows, renderCard, init }) => {
  return (
    <CardViewContainer>
      <CardItems>
        {rows.map((row: object, index: number) => (
          <CardItemContainer key={index}>
            {renderCard(row, init)}
          </CardItemContainer>
        ))}
      </CardItems>
    </CardViewContainer>
  );
};

export default CardView;
