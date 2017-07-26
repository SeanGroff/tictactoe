import _cloneDeep from 'lodash/cloneDeep';
import {
  ADD_SYMBOL,
  CHOOSE_PLAYER_SYMBOL,
  RESTART,
} from '../actions/constants';
import { X, O } from '../symbols/symbols';
import { getRows, hasWonInRow, hasWonInColumn, isDraw } from '../logic/logic';

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
      const { symbol, position, row } = action.payload;
      const newState = _cloneDeep(state);
      newState.gameBoard[row][position] = newState.turn;
      const rows = getRows(newState.gameBoard);

      newState.won =
        hasWonInRow(symbol, newState.gameBoard[row]) ||
        hasWonInColumn(symbol, row, position, ...rows);

      // newState.draw = isDraw();

      if (!newState.won && !newState.draw) {
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
