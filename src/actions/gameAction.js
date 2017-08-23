import { ADD_SYMBOL, CHOOSE_PLAYER_SYMBOL, RESTART } from './constants';

export const addSymbol = tile => ({
  type: ADD_SYMBOL,
  payload: {
    tile,
  },
});

export const choosePlayerSymbol = symbol => ({
  type: CHOOSE_PLAYER_SYMBOL,
  payload: symbol,
});

export const restart = () => ({ type: RESTART });
