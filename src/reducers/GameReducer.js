import _compose from 'lodash/fp/compose';
import {
  ADD_SYMBOL,
  CHOOSE_PLAYER_SYMBOL,
  RESTART,
} from '../actions/constants';
import { X, O } from '../symbols/symbols';
import { humanPlayerTurn, aiPlayerTurn } from '../logic/logic';

export const initialState = {
  gameBoard: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  won: false,
  draw: false,
  humanPlayer: '',
  aiPlayer: '',
};

/**
 * @todo Check if human won, or tied, else do AI move then check for win or tie
 * @param {*} state
 * @param {*} action
 */
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      const { tile } = action.payload;
      const playersMoveSequence = _compose(aiPlayerTurn, humanPlayerTurn);
      return playersMoveSequence(state.humanPlayer, tile, state);
    case CHOOSE_PLAYER_SYMBOL:
      return {
        ...state,
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
