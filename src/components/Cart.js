import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h3>{item.subscription} Plan</h3>
              {/* Check if price exists before calling toFixed */}
              <p>Price: ${item.price ? item.price.toFixed(2) : 'N/A'}</p>
              <button className="remove-from-cart-button" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
