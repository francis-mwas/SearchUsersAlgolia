import React, { createContext, useReducer } from 'react';
import { initialState, userListReducer } from '../reducers/userReducer';

export const userStateContext = createContext();
export const userStateDispatch = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, userStateDispatch] = useReducer(userListReducer, initialState);

  return (
    <userStateContext.Provider value={{ users }}>
      <userStateDispatch.Provider value={{ userStateDispatch }}>
        {children}
      </userStateDispatch.Provider>
    </userStateContext.Provider>
  );
};
