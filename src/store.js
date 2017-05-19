import { createStore } from 'redux';
import gameReducer from './reducers/GameReducer';
import { O } from './symbols/symbols';

export const initialState = {
  gameBoard: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', ''],
  },
  won: undefined,
  draw: false,
  turn: O,
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
