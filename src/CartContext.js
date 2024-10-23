import React, { createContext, useState } from 'react';

// Create Cart Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(null); // Only hold one subscription at a time

  // Add or replace the subscription in the cart
  const addToCart = (item) => {
    setCartItems(item); // Replace the cart item with the new subscription
  };

  // Remove the subscription from the cart
  const removeFromCart = () => {
    setCartItems(null); // Clear the cart
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
