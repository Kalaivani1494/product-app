import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../ProductList.css'; // Import CSS file for styling
import { useEffect } from 'react';
import vegetablesImage from '../images/vegetables.jpg';
import fruitsImage from '../images/fruits.jpg';
import groceriesImage from '../images/groceries.jpg';
import pharmaceuticalImage from '../images/pharmaceutical.jpg';
import noProductsImage from '../images/no-products.jpg'; // Import the "No products available" image
import allImage from '../images/all.jpg';

const ProductList = () => {
  const [filterCategory, setFilterCategory] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const products = useSelector((state) => state.products);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    console.debug('ProductList component mounted');
    return () => {
      console.debug('ProductList component unmounted');
    };
  }, []);

  
  const categoryImages = {
    all: allImage,
    vegetables: vegetablesImage,
    fruits: fruitsImage,
    groceries: groceriesImage,
    pharmaceutical: pharmaceuticalImage,
    
  };

  const handleFilterChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === '') {
      setCategoryImage(allImage);
    } else {
      setCategoryImage(categoryImages[selectedCategory]);
    }
    setFilterCategory(selectedCategory);
    console.debug(`Filter changed to: ${selectedCategory}`);
  };

  const navigateToAddProduct = () => {
    history.push('/add');
    console.debug('Navigated to add product page');
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
    console.info(`Product deleted with id: ${id}`);
  };

  console.debug('Rendering ProductList component');

  return (
    <div className="ProductListContainer" style={{ backgroundImage: categoryImage ? `url(${categoryImage})` : `url(${allImage})` }}>
      <h2>Product List</h2>

      {products.length === 0 ? (
        <div className="emptyProductList">
          <img src={noProductsImage} alt="No products available" />
          <br></br>
          <button onClick={navigateToAddProduct}>Add Product</button>
        </div>
      ) : (
          <div>
            <label htmlFor="categoryFilter">Filter by Category:</label>
            <select
              id="categoryFilter"
              value={filterCategory}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="groceries">Groceries</option>
              <option value="pharmaceutical">Pharmaceutical Products</option>
            </select>

          <table className="productTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Can Expire</th>
                <th>Expiry Date</th>
                <th>Category</th>
                <th>Price</th>
                <th>On Special</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) =>
                (filterCategory === '' || filterCategory === 'all' || product.category === filterCategory) && (
                  <tr key={product.id} className={product.onSpecial ? 'special' : ''}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.canExpire ? 'Yes' : 'No'}</td>
                    <td>{product.canExpire ? product.expiryDate : '-'}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.onSpecial ? 'Yes' : 'No'}</td>
                    <td>
                      <button onClick={() => handleDelete(product.id)}>Delete</button>
                      <Link to={`/edit/${product.id}`}>
                        <button style={{ marginLeft: '10px' }}>Edit</button>
                      </Link>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <div className="addProductButtonWrapper">
            <button onClick={navigateToAddProduct}>Add Product</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
