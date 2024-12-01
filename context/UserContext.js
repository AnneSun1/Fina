// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import usersData from '../users.json';  // Import your fake JSON data

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(usersData[0]);

  useEffect(() => {
    // Get the first user from the JSON file and set it as the logged-in user
    const firstUser = usersData[0];
    setUser(firstUser);
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
