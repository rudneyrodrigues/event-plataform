import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4p2rqg81knf01xshxd9dcah/master",
  cache: new InMemoryCache(),
});