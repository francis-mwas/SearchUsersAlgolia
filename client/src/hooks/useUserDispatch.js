import React from 'react';
import { UserStateDispatch } from '../store';

export const useUserStateDispatch = () => {
  const context = React.useContext(UserStateDispatch);
  if (context === undefined) {
    throw new Error(
      'UserStateDispatch must be used within a UserContextProvider'
    );
  }
  return context;
};
