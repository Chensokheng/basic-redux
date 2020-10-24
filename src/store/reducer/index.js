import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

export const allReducers = combineReducers({
  todos: todoReducer,
  user: userReducer,
});
