import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
/*
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})*/



ReactDOM.render(
  /*<ApolloProvider client={client}>*/
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  /*</ApolloProvider>*/,
  document.getElementById('root')
);

