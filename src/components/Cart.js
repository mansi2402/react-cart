import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul className="cart">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <li key={item.id}>
              <img src={`images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
