import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

export default function createApolloClient(jwt) {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }) => ({
      headers: {
        authorization: jwt ? `Bearer ${jwt}` : '',
        ...headers
      }
    }));

    return forward(operation);
  });

  const httpLink = new HttpLink({
    uri: "https://cms.trial-task.k8s.ext.fcse.io/graphql",
  });

  return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
  });
}