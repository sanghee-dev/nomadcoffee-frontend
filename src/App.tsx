import AppRouter from "router/AppRouter";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/apollo";
import { UseIsDarkMode } from "context/contextFn";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { lightTheme, darkTheme } from "styles/styles";

function App() {
  const { isDarkMode } = UseIsDarkMode();

  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
          <GlobalStyles />
          <AppRouter />
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
