import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

//no Subscription required for develop process

const httpLink = createHttpLink({
  uri: "http://localhost:3007/graphQL",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
