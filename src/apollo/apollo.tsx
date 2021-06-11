import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://nomadcoffee-backend-build.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }: any) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
