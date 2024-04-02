// ProductForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ProductForm } from './components/ProductForm';
import { MemoryRouter } from 'react-router-dom';

describe('ProductForm', () => {
  const mockStore = configureStore([]);

  it('renders without errors', () => {
    const store = mockStore({ products: [] });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductForm />
        </MemoryRouter>
      </Provider>
    );
  });

  // Add more tests as needed
});