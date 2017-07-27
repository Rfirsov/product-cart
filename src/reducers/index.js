import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products.js';
import counter from './counter.js';

export default combineReducers({
  router: routerReducer,
  products,
  counter
})
