import _cloneDeep from 'lodash/cloneDeep';
import {
  ADD_SYMBOL,
  CHOOSE_PLAYER_SYMBOL,
  RESTART,
} from '../actions/constants';
import { X, O } from '../symbols/symbols';

export const initialState = {
  gameBoard: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', ''],
  },
  won: undefined,
  draw: false,
  turn: '',
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
    case CHOOSE_PLAYER_SYMBOL:
      return {
        ...state,
        turn: action.payload,
      };
    case RESTART:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default gameReducer;
