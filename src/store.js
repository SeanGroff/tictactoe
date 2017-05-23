import { createStore } from 'redux';
import gameReducer, { initialState } from './reducers/GameReducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  gameReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
