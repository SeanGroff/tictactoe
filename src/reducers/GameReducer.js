import _cloneDeep from 'lodash/cloneDeep';
import { ADD_SYMBOL, RESTART } from '../actions/constants';
import { O, X } from '../symbols/symbols';

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

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      const newState = _cloneDeep(state);
      newState.gameBoard[action.payload.row][action.payload.position] =
        newState.turn;
      if (!newState.won) {
        newState.turn = newState.turn === O ? X : O;
      }
      return newState;
    case RESTART:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
