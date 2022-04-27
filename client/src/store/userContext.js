import React, { createContext, useReducer } from 'react';
import { initialState, userListReducer } from '../reducers/userReducer';

export const UserStateContext = createContext();
export const UserStateDispatch = createContext();

export const UserContextProvider = ({ children }) => {
  const [usersData, userListDispatch] = useReducer(
    userListReducer,
    initialState
  );

  return (
    <UserStateContext.Provider value={{ usersData }}>
      <UserStateDispatch.Provider
        value={{
          userListDispatch,
        }}
      >
        {children}
      </UserStateDispatch.Provider>
    </UserStateContext.Provider>
  );
};
