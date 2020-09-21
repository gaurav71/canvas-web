import { ApolloClient, createHttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from "@apollo/client/utilities";
import { subscriptionsUrl, url } from "../config";

const httpLink = createHttpLink({
  uri: `${url}/graphql`,
  credentials: 'include'
});

const wsLink = new WebSocketLink({
  uri: `${subscriptionsUrl}`,
  options: {
    reconnect: true,
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache(),
  link: splitLink
});