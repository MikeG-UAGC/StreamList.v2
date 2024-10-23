import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; // Import Cart Context

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext); // Access cart context

  return (
    <div>
      <h1>Cart Page</h1>

      {/* Display the current subscription in the cart */}
      {cartItems ? (
        <div>
          <h3>Subscription in Cart: {cartItems.subscription}</h3>
          <p>Price: ${cartItems.price.toFixed(2)}</p>
          {/* Remove button */}
          <button className="remove-from-cart-button" onClick={removeFromCart}>
            Remove Subscription
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
