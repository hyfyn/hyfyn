import { FC } from "react";
import MainLayout from "layout/main";
import ListItems from "app/components/atoms/listItems";
export interface reposProps {}

const repos: FC = () => {
  return (
    <MainLayout>
      <h1>List of my Repos Queried from GraphQL</h1>
      <ListItems type="ol" items={["test", "test2", "test3"]} />
    </MainLayout>
  );
};

export default repos;
