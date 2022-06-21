import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o0f9ph01cc01xx7aos11pi/master',
  cache: new InMemoryCache()
})