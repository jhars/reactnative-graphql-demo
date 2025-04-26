import React, { createContext, useState } from 'react';

export const AddPlayerContext = createContext();

export const AddPlayerProvider = ({ children }) => {
  const [addPlayer, setAddPlayer] = useState(null);
  // const [show, setShow] = useState(null);

  return (
    <AddPlayerContext.Provider value={{ addPlayer, setAddPlayer }}>
      {children}
    </AddPlayerContext.Provider>
  );
};