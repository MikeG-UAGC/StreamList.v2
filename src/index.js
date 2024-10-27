import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './CartContext'; // Import CartProvider

ReactDOM.render(
  <React.StrictMode>
    <CartProvider> {/* Wrap App in CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
