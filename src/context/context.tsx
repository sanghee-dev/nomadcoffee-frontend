import { useState, createContext } from "react";
import { ContextType } from "./contextType";

export const Context = createContext<ContextType | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Context.Provider
      value={{
        isLoggedInContext: {
          isLoggedIn,
          setIsLoggedIn,
        },
        isDarkModeContext: {
          isDarkMode,
          setIsDarkMode,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
