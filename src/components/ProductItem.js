// src/components/ProductItem.js

import React from 'react';

const ProductItem = ({ product, removeFromCart }) => {
  return (
    <li key={product.id}>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
    </li>
  );
};

export default ProductItem;
