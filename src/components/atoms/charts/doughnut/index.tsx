import { FC } from "react";
import { Doughnut } from "react-chartjs-2";

export type DoughnutChartProps = {
  data: object; // create type for object structure
  width?: number;
  height?: number;
};

const DoughnutChart: FC<DoughnutChartProps> = ({
  data,
  width = 100,
  height = 100,
}) => {
  return (
    <Doughnut
      data={data}
      width={width}
      height={height}
      options={{ maintainAspectRatio: false }}
    />
  );
};

export default DoughnutChart;
