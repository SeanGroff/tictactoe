import React, { Component } from 'react';
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
class Board extends Component {
  constructor(props) {
    super(props);
    this.addSymbol = this.addSymbol.bind(this);
    this.getSymbol = this.getSymbol.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.draw || nextProps.won) {
      nextProps.restart();
    }
  }

  addSymbol(tile) {
    return !this.props.won && this.props.addSymbol(tile);
  }

  getSymbol(symbol, tile) {
    if (symbol === X) {
      return <XSymbol />;
    }

    if (symbol === O) {
      return <OSymbol />;
    }
    return (
      <BlankSymbol addSymbol={this.addSymbol} symbol={symbol} tile={tile} />
    );
  }

  render() {
    return (
      <BoardContainer hide={this.props.humanPlayer}>
        {this.props.gameBoard.map((tile, tileIndex) =>
          <Cell id={`col-${tileIndex}`} key={tileIndex}>
            {this.getSymbol(tile, tileIndex)}
          </Cell>,
        )}
      </BoardContainer>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Board);
