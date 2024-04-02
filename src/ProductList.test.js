// ProductList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ProductList } from './components/ProductList';

describe('ProductList', () => {
  const mockStore = configureStore([]);

  it('renders without errors', () => {
    const store = mockStore({ products: [] });
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
  });
});