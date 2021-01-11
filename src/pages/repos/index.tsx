import { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import MainLayout from "layout/main";

const EXCHANGE_RATES = gql`
  query GetUserRepos {
    user(login: "MSobieray") {
      repositories(last: 15) {
        nodes {
          name
          url
          languages(first: 5) {
            totalSize
            totalCount
            edges {
              size
              cursor
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
export interface reposProps {}
interface Currency {
  name: string;
  url: string;
}
const Repos: FC = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  return (
    <MainLayout>
      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>Error Fetching Repo Data</h1> : null}
      {!loading && !error ? (
        <div>
          <h1>List of my Repos Queried from GraphQL</h1>
          <ul>
            {data.user.repositories.nodes.map(({ name, url }: Currency) => (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </MainLayout>
  );
};

export default Repos;
