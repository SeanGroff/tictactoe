import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import XSymbol from './XSymbol';
import OSymbol from './OSymbol';
import BlankSymbol from './BlankSymbol';
import { ADD_SYMBOL, RESTART } from '../actions/constants';
import { X, O } from '../symbols/symbols';

const BoardContainer = styled.div`
  display: ${props => (props.hide ? 'flex' : 'none')};
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  margin: auto;
  font-family: 'Permanent Marker', cursive;
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
  font-size: 36px;
`;

const Board = props => {
  if (props.draw || props.won) {
    props.restart();
  }

  const addSymbol = (rowIndex, cellPosition, symbol) =>
    !props.won && props.addSymbol(rowIndex, cellPosition, symbol);

  const getSymbol = (rowIndex, cellPosition, symbol) => {
    if (symbol === X) {
      return <XSymbol />;
    }

    if (symbol === O) {
      return <OSymbol />;
    }
    return (
      <BlankSymbol
        addSymbol={addSymbol}
        row={rowIndex}
        cell={cellPosition}
        turn={props.turn}
      />
    );
  };

  return (
    <BoardContainer hide={props.turn}>
      {Object.keys(props.gameBoard).map(rowIndex =>
        <Row id={`row-${rowIndex}`} key={rowIndex}>
          {props.gameBoard[rowIndex].map((symbol, cellPosition) =>
            <Cell id={`col-${rowIndex}-${cellPosition}`} key={cellPosition}>
              {getSymbol(rowIndex, cellPosition, symbol)}
            </Cell>,
          )}
        </Row>,
      )}
    </BoardContainer>
  );
};

const mapStateToProps = state => ({
  turn: state.turn,
  draw: state.draw,
  won: state.won,
  gameBoard: state.gameBoard,
});

const mapDispatchToProps = dispatch => ({
  addSymbol: (row, position, symbol) =>
    dispatch({
      type: ADD_SYMBOL,
      payload: {
        row,
        position,
        symbol,
      },
    }),
  restart: () => dispatch({ type: RESTART }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
