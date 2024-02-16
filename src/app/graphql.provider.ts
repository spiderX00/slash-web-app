import { ApplicationConfig, inject } from '@angular/core';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://api.start.gg/gql/alpha';
export function createApollo() {
  const httpLink = inject(HttpLink);

  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  const auth = setContext((operation, context) => {
    const token = "f37a5589ddeee4a4eeccef9ccb7c2e90";
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
  },
];
