import { cloneDeep } from 'lodash';
import { initialState } from '../store';
import { ADD_SYMBOL, RESTART } from '../actions/constants';

const gameReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      const newState = cloneDeep(state);
      return newState; // update this later
    case RESTART:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
