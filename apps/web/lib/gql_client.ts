import { ApolloClient, InMemoryCache } from "@apollo/client";

export const gqlClient = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
