import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const TOKEN = "token";

export const logUserIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const logUserOut = (history: any) => {
  localStorage.removeItem(TOKEN);
  history.replace();
  window.location.reload();
};
