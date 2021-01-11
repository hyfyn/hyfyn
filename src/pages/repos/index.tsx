import { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import MainLayout from "layout/main";
import DoughnutChart from "components/atoms/charts/doughnut";
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
const mockGraphData = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

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
                <DoughnutChart data={mockGraphData} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </MainLayout>
  );
};

export default Repos;
