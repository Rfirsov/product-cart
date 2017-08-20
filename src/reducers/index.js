import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products.js';
import cart from './cart.js';

export default combineReducers({
  router: routerReducer,
  products,
  cart
})
