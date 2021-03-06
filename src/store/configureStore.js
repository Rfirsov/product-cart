import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const initialState = {};
const middleware = [
  thunk,
  routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
  applyMiddleware(...middleware)
));

export default store;
