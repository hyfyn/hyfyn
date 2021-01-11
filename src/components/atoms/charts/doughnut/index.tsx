import { FC } from "react";
import { Doughnut } from "react-chartjs-2";

export interface DoughnutChartProps {
  data: object; // create type for object structure
}

const DoughnutChart: FC<DoughnutChartProps> = ({ data }) => {
  return <Doughnut data={data} />;
};

export default DoughnutChart;
