// ProductForm.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProductForm from './components/ProductForm';
import { MemoryRouter } from 'react-router-dom';

describe('ProductForm', () => {
  test('renders form with product name input', () => {
    // Mock location object with a localhost path
    const mockLocation = {
      pathname: 'http://localhost:3000', // Mocking a localhost path
      search: '?mock=search',
      hash: '#mock-hash',
      state: { mockState: true }
    };

    render(
      // Wrap ProductForm with Provider and MemoryRouter
      <Provider store={store}>
        <MemoryRouter initialEntries={[mockLocation]}> {/* Pass mock location to initialEntries */}
          <ProductForm />
        </MemoryRouter>
      </Provider>
    );

    // Find input field by its associated label text
    const productNameInput = screen.getByLabelText('Product Name:');
    expect(productNameInput).toBeInTheDocument();
  });
});
