import { ADD_SYMBOL, CHOOSE_PLAYER_SYMBOL, RESTART } from './constants';

export const addSymbol = (symbol, tile) => ({
  type: ADD_SYMBOL,
  payload: {
    symbol,
    tile,
  },
});

export const choosePlayerSymbol = symbol => ({
  type: CHOOSE_PLAYER_SYMBOL,
  payload: symbol,
});

export const restart = () => ({ type: RESTART });
