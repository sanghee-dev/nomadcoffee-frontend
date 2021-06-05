import { useContext } from "react";
import { Context } from "./context";
import { ContextType } from "./contextType";

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(Context) as ContextType;
  return isLoggedIn;
};
