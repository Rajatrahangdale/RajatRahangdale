/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Mycontext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <Mycontext.Provider value={{ dark, setDark }}>
      {children}
    </Mycontext.Provider>
  );
};
