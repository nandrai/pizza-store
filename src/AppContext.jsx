import React from "react";
import { createContext } from "react";
import { useState } from "react";

const ContextProvider = createContext();

function AppContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <ContextProvider.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ContextProvider.Provider>
  );
}
export { ContextProvider };

export default AppContext;
