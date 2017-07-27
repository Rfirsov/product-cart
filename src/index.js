import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import store, { history } from './store/configureStore';

import App from './components/App.js';
import ProductsPage from './components/Products/ProductsPage.js';
import CartPage from './components/Cart/CartPage.js';
import WelcomePage from './components/WelcomePage/WelcomePage.js';

// import './styles/index.css';


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/products" component={ProductsPage} />
      	<Route path="/cart" component={CartPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
)
