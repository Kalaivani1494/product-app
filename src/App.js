// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import rootReducer from './app/reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/add" component={ProductForm} />
          <Route exact path="/edit/:id" component={ProductForm} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;