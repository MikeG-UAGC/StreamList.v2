import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; // Import Cart Context

function StreamList() {
  const { cartItems, addToCart } = useContext(CartContext); // Access cart context

  const handleSubscriptionSelect = (plan) => {
    const subscription = {
      subscription: plan,
      price: plan === 'Bronze' ? 4.99 : plan === 'Gold' ? 9.99 : 14.99, // Example pricing
    };
    addToCart(subscription); // Add the selected subscription to the cart (replacing any existing one)
  };

  return (
    <div>
      <h1>StreamList Page</h1>
      <p>Choose your subscription plan:</p>

      <div className="subscription-buttons">
        {/* Bronze Plan */}
        <div className="subscription-card">
          <h3>Bronze Plan</h3>
          <p>Price: $4.99/month</p>
          <p>1 screen standard definition</p>
          <button className="subscription-button bronze" onClick={() => handleSubscriptionSelect('Bronze')}>
            Add Bronze Plan to Cart
          </button>
        </div>

        {/* Gold Plan */}
        <div className="subscription-card">
          <h3>Gold Plan</h3>
          <p>Price: $9.99/month</p>
          <p>Up to 2 screens HD streaming</p>
          <button className="subscription-button gold" onClick={() => handleSubscriptionSelect('Gold')}>
            Add Gold Plan to Cart
          </button>
        </div>

        {/* Platinum Plan */}
        <div className="subscription-card">
          <h3>Platinum Plan</h3>
          <p>Price: $14.99/month</p>
          <p>Up to 4 screens with 4K streaming</p>
          <button className="subscription-button platinum" onClick={() => handleSubscriptionSelect('Platinum')}>
            Add Platinum Plan to Cart
          </button>
        </div>
      </div>

      {/* Display existing cart item */}
      {cartItems && (
        <p>Current Subscription in Cart: {cartItems.subscription} (${cartItems.price})</p>
      )}
    </div>
  );
}

export default StreamList;
