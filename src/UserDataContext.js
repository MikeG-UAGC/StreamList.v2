import React, { createContext, useState } from 'react';

// Create Context for User Data
export const UserDataContext = createContext();

// User Data Provider Component
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({}); // Store user data like subscriptions or selected movies

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
