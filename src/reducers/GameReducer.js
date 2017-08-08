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
  getEmptyTiles,
  winningMove,
} from '../logic/logic';

export const initialState = {
  gameBoard: {
    0: [0, 1, 2],
    1: [3, 4, 5],
    2: [6, 7, 8],
  },
  won: undefined,
  draw: false,
  turn: '',
  humanPlayer: '',
  aiPlayer: '',
  turnNumber: 1,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      const { symbol, position, row } = action.payload;
      const newState = _cloneDeep(state);
      newState.gameBoard[row][position] = newState.turn;
      const rows = getRows(newState.gameBoard);

      // minimax AI
      const availableTiles = getEmptyTiles(newState.gameBoard);
      console.log('available tiles: ', availableTiles);
      // const foundWinningMove = winningMove();

      newState.won =
        hasWonInRow(symbol, newState.gameBoard[row]) ||
        hasWonInColumn(symbol, row, position, ...rows) ||
        hasWonInLeftSlant(symbol, ...rows) ||
        hasWonInRightSlant(symbol, ...rows);

      if (!newState.won) {
        newState.draw = isDraw(newState.gameBoard);
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
        humanPlayer: action.payload,
        aiPlayer: action.payload === O ? X : O,
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
