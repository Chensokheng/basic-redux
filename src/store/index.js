import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { allReducers } from './reducer';

export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(logger))
);
