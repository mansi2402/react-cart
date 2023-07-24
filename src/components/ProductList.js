// src/components/ProductList.js

import React from 'react';
import products from '../products';

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Make sure this line is present */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
