import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Routes } from './Routes';
import { client } from '../graphql';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}