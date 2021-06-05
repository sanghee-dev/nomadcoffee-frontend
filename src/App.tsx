import AppRouter from "router/AppRouter";
import ContextProvider from "context/context";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { lightTheme, darkTheme } from "styles/styles";
// import { useIsDarkMode } from "context/contextFn";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={true ? lightTheme : darkTheme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
