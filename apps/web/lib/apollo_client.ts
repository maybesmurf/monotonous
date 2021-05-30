import { ApolloClient, InMemoryCache } from '@apollo/client';

import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const IS_BROWSER = typeof window !== 'undefined';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

const wsLink = IS_BROWSER
  ? new WebSocketLink({
      uri: 'ws://localhost:3000/subscriptions',
      options: {
        reconnect: true,
      },
    })
  : null;

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = IS_BROWSER
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      // @ts-ignore
      wsLink,
      httpLink
    )
  : httpLink;

export const apolloClient = new ApolloClient({
  uri: '/graphql',
  link: splitLink,
  cache: new InMemoryCache({}),
});
