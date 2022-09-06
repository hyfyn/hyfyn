import { useQuery, gql } from "@apollo/client";

interface User {
  user: {
    repositories: {
      nodes: Repository[];
    };
  };
}

interface Repository {
  name: string;
  url: string;
  description: string;
  languages: Language;
}

export type LanguageEdge = {
  size: number;
  node: {
    name: string;
    color: string;
  };
};

export type Language = {
  totalSize: number;
  totalCount: number;
  edges: LanguageEdge[];
};

const QUERY_REPOS = gql`
  query repos {
    user(login: "MSobieray") {
      repositories(last: 5) {
        nodes {
          name
          url
          description
          languages(first: 5) {
            totalSize
            totalCount
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

function useRepoQuery() {
  const { loading, error, data } = useQuery<User>(QUERY_REPOS);
  return {loading, error, data}
}

export default useRepoQuery;