import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles.css'; // Import the new styles.css file

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <header>
        <h1>React Shopping Cart</h1>
      </header>
      <div className="container">
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
