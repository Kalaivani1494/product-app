import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { Router } from 'react-router-dom';

describe('App', () => {
  test('renders learn react link', () => {
    render(<Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>);
    // Additional assertions or test logic
  });
});

describe('ProductForm', () => {
  test('renders learn react link', () => {
    render(<Provider store={store}>
      <Router>
      <ProductForm />
      </Router>
    </Provider>);
    // Additional assertions or test logic
  });
});

describe('ProductList', () => {
  test('renders learn react link', () => {
    render(<Provider store={store}>
      <Router>
      <ProductList />
      </Router>
    </Provider>);
    // Additional assertions or test logic
  });
});

