"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/graphql/apollo-client";

const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const apolloClient = client();
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
