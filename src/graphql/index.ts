import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { url } from "../config";

const link = createHttpLink({
  uri: `${url}/graphql`,
  credentials: 'include'
});

export const client = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache(),
  link
});