// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import rootReducer from './app/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/add" component={ProductForm} />
        <Route path="/edit/:id" component={ProductForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);