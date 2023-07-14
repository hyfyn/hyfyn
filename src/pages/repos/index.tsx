import { FC } from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import RepoList from "app/components/molecules/repoList";
import { Section } from "app/components/atoms";

console.log(process.env.NEXT_PUBLIC_GITHUB_TOKEN);

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${
        token ? token : process.env.NEXT_PUBLIC_GITHUB_TOKEN
      }`,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Repos: FC = () => (
  <Section>
    <ApolloProvider client={client}>
      <RepoList />
    </ApolloProvider>
  </Section>
);

export default Repos;
