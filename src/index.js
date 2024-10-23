import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserDataProvider } from './UserDataContext'; // Import the UserDataProvider

ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider> {/* Wrap the app in the context provider */}
      <App />
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
