import { combineReducers } from 'redux';
import { listReducer } from '../reducers/ListReducer';

export const rootReducer = combineReducers({
  list: listReducer,
});
