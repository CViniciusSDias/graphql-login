import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
    uri: "https://cms.trial-task.k8s.ext.fcse.io/graphql",
    cache: new InMemoryCache(),
});