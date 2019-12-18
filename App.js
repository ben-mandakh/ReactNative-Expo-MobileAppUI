import React from 'react';
import { StatusBar } from "react-native";
import { Provider } from 'react-redux';
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { NETWORK_INTERFACE } from "./src/config";
import configureStore from "./src/redux";
import AppNavigator from './src/navigators/AppNavigator';

const client = new ApolloClient({
  link: new HttpLink({ uri: NETWORK_INTERFACE }),
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <Provider store={configureStore({})}>
      <ApolloProvider client={client} >
        <AppNavigator/>
      </ApolloProvider>
    </Provider>
  );
}


