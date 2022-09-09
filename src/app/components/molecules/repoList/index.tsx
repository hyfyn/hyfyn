import { FC } from "react";
import MainLayout from "app/layout/main";
import { Card } from "app/components/atoms";
import { Grid } from "app/components/atoms";
import { DoughnutChart } from "app/components/atoms";
import useRepoQuery, { Language } from "./hooks/useReposQuery";

//  Can I Import Types from chart js and clean up the below typings?

// export interface reposProps {}

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
  const { loading, error, data } = useRepoQuery();
  return (
    <MainLayout>
      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>Error Fetching Repo Data</h1> : null}
      {!loading && !error ? (
        <div>
          <h1>List of my Repos Queried from GraphQL</h1>

          {data?.user.repositories.nodes.map(
            ({ description, name, url, languages }) => (
              <Card key={name} title={`${description} (${name})`} url={url}>
                <Grid>
                  <div>
                    <DoughnutChart data={createGraph(languages)} />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Grid>
              </Card>
            )
          )}
        </div>
      ) : null}
    </MainLayout>
  );
};

export default Repos;
