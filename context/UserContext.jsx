// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import usersData from '../users.json';  // Import your fake JSON data

const UserContext = React.createContext();
const initialData = {
  "id": 1,
  "name": "John Doe",
  "email": "john@gmail.com",
  "monthly-budget": 400,
  "spendings": [{
      "date": "2024-11-29",
      "category": "Food",
      "spending": 20
  },
  {
      "date": "2024-11-29",
      "category": "Other",
      "spending": 2
  },
  {
      "date": "2024-11-20",
      "category": "Other",
      "spending": 18
  },
  {
      "date": "2024-11-15",
      "category": "Shopping",
      "spending": 70
  }
]};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialData);

  const updateSpending = (id, newSpending) => {
    setUser({ ...user, spendings: [...user.spendings, newSpending]});
  }
  return (
    <UserContext.Provider value={{ user, updateSpending }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};
