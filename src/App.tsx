import AppRouter from "router/AppRouter";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { lightTheme, darkTheme } from "styles/styles";
import { useIsDarkMode } from "context/contextFn";

function App() {
  const { isDarkMode } = useIsDarkMode();

  return (
    <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
