import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function StreamList() {
  const { cartItems, addToCart } = useContext(CartContext);

  const handleSubscriptionSelect = (plan) => {
    const subscription = {
      subscription: plan,
      price: plan === 'Bronze' ? 4.99 : plan === 'Gold' ? 9.99 : plan === 'Platinum' ? 14.99 : 0, // Default to 0 if undefined
    };
    addToCart(subscription);
  };

  return (
    <div>
      <h1>StreamList Page</h1>
      <p>Choose your subscription plan:</p>

      <div className="subscription-buttons">
        <button className="subscription-button bronze" onClick={() => handleSubscriptionSelect('Bronze')}>
          Add Bronze Plan to Cart
        </button>
        <button className="subscription-button gold" onClick={() => handleSubscriptionSelect('Gold')}>
          Add Gold Plan to Cart
        </button>
        <button className="subscription-button platinum" onClick={() => handleSubscriptionSelect('Platinum')}>
          Add Platinum Plan to Cart
        </button>
      </div>

      {/* Display the current subscription in the cart */}
      {cartItems && cartItems.length > 0 && (
        <p>
          Current Subscription in Cart: {cartItems[0].subscription} (${cartItems[0].price.toFixed(2)})
        </p>
      )}
    </div>
  );
}

export default StreamList;
