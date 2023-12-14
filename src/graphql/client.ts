import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const createApolloClient = async (): Promise<
  ApolloClient<NormalizedCacheObject>
> => {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  return client;
};

export default createApolloClient;
