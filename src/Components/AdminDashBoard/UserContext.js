import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", registrationDate: "2023-01-10", status: "Active", cnic: "17101-567348-0" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Moderator", registrationDate: "2023-02-15", status: "Active", cnic: "17101-567348-0" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User   ", registrationDate: "2023-03-20", status: "Inactive", cnic: "17101-567348-0" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User   ", registrationDate: "2023-04-25", status: "Active", cnic: "17101-567348-0" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Admin", registrationDate: "2023-05-30", status: "Active", cnic: "17101-567348-0" },
    { id: 6, name: "Eva White", email: "eva@example.com", role: "Moderator", registrationDate: "2023-06-18", status: "Inactive", cnic: "17101-567348-0" },
    { id: 7, name: "Michael Green", email: "michael@example.com", role: "User   ", registrationDate: "2023-07-22", status: "Active", cnic: "17101-567348-0" },
    { id: 8, name: "Sophia Black", email: "sophia@example.com", role: "Admin", registrationDate: "2023-08-11", status: "Active", cnic: "17101-567348-0" }
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};