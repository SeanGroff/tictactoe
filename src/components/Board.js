import React from 'react';
import styled from 'styled-components';
import { board } from '../logic/logic';

const GameBoard = styled.div`
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
  return (
    <GameBoard>
      {Object.keys(board).map(rowIndex => (
        <Row id={`row-${rowIndex}`} key={rowIndex}>
          {board[rowIndex].map((symbol, position) => (
            <Cell id={`col-${rowIndex}-${position}`} key={position} />
          ))}
        </Row>
      ))}
    </GameBoard>
  );
};

export default Board;
