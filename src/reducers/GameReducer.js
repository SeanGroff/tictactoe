import _cloneDeep from 'lodash/cloneDeep';
import {
  ADD_SYMBOL,
  CHOOSE_PLAYER_SYMBOL,
  RESTART,
} from '../actions/constants';
import { X, O } from '../symbols/symbols';
import {
  getRows,
  hasWonInRow,
  hasWonInColumn,
  hasWonInLeftSlant,
  hasWonInRightSlant,
  isDraw,
} from '../logic/logic';

export const initialState = {
  gameBoard: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', ''],
  },
  won: undefined,
  draw: false,
  turn: '',
  turnNumber: 1,
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
        hasWonInColumn(symbol, row, position, ...rows) ||
        hasWonInLeftSlant(symbol, ...rows) ||
        hasWonInRightSlant(symbol, ...rows);

      if (!newState.won) {
        newState.draw = isDraw(newState.turnNumber);
      }

      if (!newState.won && !newState.draw) {
        newState.turn = newState.turn === O ? X : O;
        newState.turnNumber += 1;
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
