export type ContextType = {
  loggedIn: {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
  };
  darkMode: {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
  };
};
