import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC, ReactNode } from "react";
export * from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://crwn-clothing.com",
  cache: new InMemoryCache(),
});

export const GQLClient: FC<{ children: ReactNode }> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
