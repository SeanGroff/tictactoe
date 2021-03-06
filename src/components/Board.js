import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
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
  max-width: 170px;
  margin: auto;
  font-family: 'Permanent Marker', cursive;
`;

const Cell = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 36px;
`;

const mapStateToProps = state => ({
  humanPlayer: state.humanPlayer,
  draw: state.draw,
  won: state.won,
  gameBoard: state.gameBoard,
});

const mapDispatchToProps = dispatch => ({
  addSymbol: tile =>
    dispatch({
      type: ADD_SYMBOL,
      payload: {
        tile,
      },
    }),
  restart: () => dispatch({ type: RESTART }),
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.draw || nextProps.won) {
        nextProps.restart();
      }
    },
  }),
);

const Board = enhance(props => {
  const addSymbol = tile => {
    return !props.won && props.addSymbol(tile);
  };

  const getSymbol = (symbol, tile) => {
    if (symbol === X) {
      return <XSymbol />;
    }

    if (symbol === O) {
      return <OSymbol />;
    }
    return <BlankSymbol addSymbol={addSymbol} symbol={symbol} tile={tile} />;
  };

  return (
    <BoardContainer hide={props.humanPlayer}>
      {props.gameBoard.map((tile, tileIndex) =>
        <Cell id={`col-${tileIndex}`} key={tileIndex}>
          {getSymbol(tile, tileIndex)}
        </Cell>,
      )}
    </BoardContainer>
  );
});

export default Board;
