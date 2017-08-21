import {
  ADD_SYMBOL,
  CHOOSE_PLAYER_SYMBOL,
  RESTART,
} from '../actions/constants';
import { X, O } from '../symbols/symbols';
import { winningMove, isDraw, miniMax } from '../logic/logic';

export const initialState = {
  gameBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  won: undefined,
  draw: false,
  turn: '',
  humanPlayer: '',
  aiPlayer: '',
  turnNumber: 1,
};

/**
 * @todo Check if human won, or tied, else do AI move then check for win or tie
 * @param {*} state
 * @param {*} action
 */
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      const { symbol, tile } = action.payload;
      const newState = state;

      /* ====================================================================
                                 Human Player Turn
         ==================================================================== */
      newState.gameBoard[tile] = newState.humanPlayer;

      newState.won = winningMove(symbol, newState.gameBoard);

      if (!newState.won) {
        newState.draw = isDraw(newState.gameBoard);
      }

      if (!newState.won && !newState.draw) {
        newState.turn = newState.turn === O ? X : O;
        newState.turnNumber += 1;

        /* ====================================================================
                                 AI Player Turn
         ==================================================================== */
        /**
         * @todo Move AI Player Move to it's own Action/Reducer flow to fix bug!
         */
        const aiMove = miniMax(newState.gameBoard, newState.turn);

        newState.gameBoard[aiMove.tile] = newState.aiPlayer;

        newState.won = winningMove(newState.aiPlayer, newState.gameBoard);

        if (!newState.won) {
          newState.draw = isDraw(newState.gameBoard);
        }

        if (!newState.won && !newState.draw) {
          newState.turn = newState.turn === O ? X : O;
          newState.turnNumber += 1;
        }
      }

      return {
        ...state,
        ...newState,
      };
    case CHOOSE_PLAYER_SYMBOL:
      return {
        ...state,
        turn: action.payload,
        humanPlayer: action.payload,
        aiPlayer: action.payload === O ? X : O,
      };
    case RESTART:
      /**
       * @todo Fix the restart bug!
       */
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default gameReducer;
