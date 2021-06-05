type StateTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export type ContextType = {
  loggedIn: StateTypes;
};
