import React from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { Routes } from './Routes';
import { url } from '../config';

const link = createHttpLink({
  uri: `${url}/graphql`,
  credentials: 'include'
});

const client = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache(),
  link
});

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}