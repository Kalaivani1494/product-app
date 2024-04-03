// Import necessary libraries and components
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { MemoryRouter, Route } from 'react-router-dom';

// Mock data for the test
const mockProducts = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
];

describe('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });
});

describe('ProductForm', () => {
  test('renders ProductForm component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/mock-path']}>
          <Route path="/mock-path">
            <ProductForm />
          </Route>
        </MemoryRouter>
      </Provider>
    );
  });
});

describe('ProductList', () => {
  test('renders ProductList component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );
  });
});
