import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext); // Access clearCart from context
  const [checkoutMessage, setCheckoutMessage] = useState(''); // State for checkout success message

  // Handle the checkout process
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setCheckoutMessage("Your cart is empty. Add a subscription to proceed.");
      return;
    }

    // Clear cart and show success message
    setCheckoutMessage("Thank you for subscribing! Start streaming now!");
    clearCart(); // Use clearCart from context
  };

  return (
    <div>
      <h1>My Cart</h1>
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

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <button 
          onClick={handleCheckout} 
          style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
        >
          Checkout
        </button>
      )}

      {/* Display Checkout Success Message */}
      {checkoutMessage && (
        <p style={{ marginTop: '20px', color: 'green' }}>{checkoutMessage}</p>
      )}
    </div>
  );
}

export default Cart;
