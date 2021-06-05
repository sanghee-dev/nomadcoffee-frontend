import { useContext } from "react";
import { Context } from "./context";
import { ContextType } from "./contextType";

export const useIsLoggedIn = () => {
  const { loggedIn } = useContext(Context) as ContextType;
  return loggedIn;
};
