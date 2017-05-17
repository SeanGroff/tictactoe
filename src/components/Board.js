import React from 'react';
import styled from 'styled-components';
import { gameBoard } from '../logic/logic';
import { X, O } from '../symbols/symbols';
import XSymbol from './XSymbol';
import OSymbol from './OSymbol';
import BlankSymbol from './BlankSymbol';

const BoardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 150px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cell = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const Board = props => {
  const addSymbol = () => console.log('Fire the addSymbol Action Creator!');

  const getSymbol = (rowIndex, cellPosition, symbol) => {
    if (symbol === X) {
      return <XSymbol />;
    }

    if (symbol === O) {
      return <OSymbol />;
    }
    return <BlankSymbol addSymbol={addSymbol} />;
  };

  return (
    <BoardContainer>
      {Object.keys(gameBoard).map(rowIndex => (
        <Row id={`row-${rowIndex}`} key={rowIndex}>
          {gameBoard[rowIndex].map((symbol, cellPosition) => (
            <Cell id={`col-${rowIndex}-${cellPosition}`} key={cellPosition}>
              {getSymbol(rowIndex, cellPosition, symbol)}
            </Cell>
          ))}
        </Row>
      ))}
    </BoardContainer>
  );
};

export default Board;
