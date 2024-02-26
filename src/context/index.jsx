/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [value, setValue] = useState({});

  return (
    <StateContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
