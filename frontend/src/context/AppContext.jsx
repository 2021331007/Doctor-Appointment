// AppContext.js

import React, { createContext } from "react";
import { doctors } from "../assets/assets";

// 1. Create the context
export const AppContext = createContext();

// 2. Create the context provider
const AppContextProvider = ({ children }) => {
  
  const currencySymbol = '$'
const value = {
  doctors, currencySymbol
};

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
