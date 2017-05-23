import { ADD_SYMBOL, RESTART } from './constants';

export const addSymbol = (row, position, symbol) => ({
  type: ADD_SYMBOL,
  payload: {
    row,
    position,
    symbol,
  },
});

export const restart = () => ({ type: RESTART });
