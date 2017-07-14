import { ADD_SYMBOL, CHOOSE_PLAYER_SYMBOL, RESTART } from './constants';

export const addSymbol = (row, position, symbol) => ({
  type: ADD_SYMBOL,
  payload: {
    row,
    position,
    symbol,
  },
});

export const choosePlayerSymbol = symbol => ({
  type: CHOOSE_PLAYER_SYMBOL,
  payload: symbol,
});

export const restart = () => ({ type: RESTART });
