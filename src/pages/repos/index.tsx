import { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import MainLayout from "layout/main";
import DoughnutChart from "components/atoms/charts/doughnut";
//  Can I Import Types from chart js and clean up the below typings?

// export interface reposProps {}

type LanguageEdge = {
  size: number;
  node: {
    name: string;
    color: string;
  };
};

type Language = {
  totalSize: number;
  totalCount: number;
  edges: LanguageEdge[];
};

interface Repository {
  name: string;
  url: string;
  languages: Language;
}

interface User {
  user: {
    repositories: {
      nodes: Repository[];
    };
  };
}

type GraphData = {
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
};

interface Graph {
  labels: string[];
  datasets: GraphData[];
}
// const mockGraphData: Graph = {
//   labels: ["Red", "Green", "Yellow"],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//     },
//   ],
// };
const EXCHANGE_RATES = gql`
  query GetUserRepos {
    user(login: "MSobieray") {
      repositories(last: 5) {
        nodes {
          name
          url
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

const createGraph = (data: Language): Graph => {
  const size: number[] = [];
  const colors: string[] = [];
  const labels: string[] = [];

  data.edges.forEach((edge) => {
    size.push(Number(((edge.size / data.totalSize) * 100).toFixed(1)));
    colors.push(edge.node.color);
    labels.push(edge.node.name);
  });

  return {
    labels: labels,
    datasets: [
      {
        data: [...size],
        backgroundColor: [...colors],
        hoverBackgroundColor: [...colors],
      },
    ],
  };
};

const Repos: FC = () => {
  const { loading, error, data } = useQuery<User>(EXCHANGE_RATES);
  return (
    <MainLayout>
      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>Error Fetching Repo Data</h1> : null}
      {!loading && !error ? (
        <div>
          <h1>List of my Repos Queried from GraphQL</h1>
          <ul>
            {data?.user.repositories.nodes.map(({ name, url, languages }) => (
              <li key={name}>
                <a href={url}>{name}</a>
                <DoughnutChart data={createGraph(languages)} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </MainLayout>
  );
};

export default Repos;
