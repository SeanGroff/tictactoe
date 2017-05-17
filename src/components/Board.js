import React from 'react';
import styled from 'styled-components';

// Placeholder board for initial state
const board = ['', '', '', '', '', '', '', '', ''];

const GameBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 150px;
`;

const Cell = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-color: black;
  border-style: solid;
`;

const Board = props => {
  return (
    <GameBoard>
      {board.map((cell, index) => (
        <Cell id={`cell-${index}`} position={index} key={index}>{cell}</Cell>
      ))}
    </GameBoard>
  );
};

export default Board;
