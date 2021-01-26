import { FC } from "react";
import MainLayout from "layout/main";

export interface reposProps {}

const repos: FC = () => {
  return (
    <MainLayout>
      <h1>List of my Repos Queried from GraphQL</h1>
    </MainLayout>
  );
};

export default repos;
