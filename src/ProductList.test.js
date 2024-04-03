import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductList from './components/ProductList';
import { MemoryRouter } from 'react-router-dom';

describe('ProductList', () => {
  const mockStore = configureStore([]);

  it('renders without errors', () => {
    // Mock initial state for the store
    const initialState = {
      products: [],
    };
    
    // Create a mock store with the initial state
    const store = mockStore(initialState);
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );
  });
});
