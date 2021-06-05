import { useContext } from "react";
import { Context } from "./context";
import { ContextType } from "./contextType";

export const useIsLoggedIn = () => {
  const { isLoggedInContext } = useContext(Context) as ContextType;
  return isLoggedInContext;
};

export const useIsDarkMode = () => {
  const { isDarkModeContext } = useContext(Context) as ContextType;
  return isDarkModeContext;
};
