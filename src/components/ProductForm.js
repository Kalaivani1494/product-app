import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import '../ProductForm.css'; // Import CSS file for styling

const ProductForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    canExpire: false,
    expiryDate: null,
    category: '',
    price: '',
    onSpecial: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    price: '',
    category: '',
  });

  useEffect(() => {
    if (id) {
      const existingProduct = products.find(p => p.id === parseInt(id));
      if (existingProduct) {
        setProduct(existingProduct);
      }
    }
  }, [id, products]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setProduct(prevProduct => ({ ...prevProduct, [name]: newValue }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    console.debug(`Field '${name}' changed to: ${newValue}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!product.name) {
      setErrors(prevErrors => ({ ...prevErrors, name: 'Please enter a product name.' }));
      console.debug('Product name is required');
      return;
    }

    if (!product.price) {
      setErrors(prevErrors => ({ ...prevErrors, price: 'Please enter a price.' }));
      console.debug('Price is required');
      return;
    }

    if (!product.category) {
      setErrors(prevErrors => ({ ...prevErrors, category: 'Please select a category.' }));
      console.debug('Category is required');
      return;
    }

    if (id) {
      dispatch({ type: 'EDIT_PRODUCT', payload: product });
      console.info('Product edited');
    } else {
      dispatch({ type: 'ADD_PRODUCT', payload: { ...product, id: Date.now() } });
      console.info('Product added');
    }
    history.goBack();
    console.info('Product form submitted');
  };

  console.debug('Rendering ProductForm component');

  return (
    <div className="ProductFormContainer">
      <h2 style={{ position: 'fixed', top: 4, left: 0, width: '100%', color: 'darkblue', fontSize: 40 }}>{id ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="errorMessage">{errors.name}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="canExpire">Can Expire:</label>
          <input
            type="checkbox"
            id="canExpire"
            name="canExpire"
            checked={product.canExpire}
            onChange={handleChange}
          />
        </div>
        {product.canExpire && (
          <div className="formGroup">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={product.expiryDate}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="formGroup">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="groceries">Furniture</option>
            <option value="pharmaceutical">Pharmaceutical Products</option>
          </select>
          {errors.category && <p className="errorMessage">{errors.category}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
          {errors.price && <p className="errorMessage">{errors.price}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="onSpecial">On Special:</label>
          <input
            type="checkbox"
            id="onSpecial"
            name="onSpecial"
            checked={product.onSpecial}
            onChange={handleChange}
          />
        </div>
        <div className="formButtons">
          <button type="submit">{id ? 'Save' : 'Add'}</button>
          <button type="button" onClick={() => history.goBack()}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;