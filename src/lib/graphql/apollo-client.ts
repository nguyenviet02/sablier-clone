import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import "dotenv/config";

const client = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: API_URL,
    connectToDevTools: true,
  });
};

export default client;
