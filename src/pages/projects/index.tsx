import { FC } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "app/layout/main";
interface ParamTypes {
  id: string;
}

const Projects: FC = () => {
  const { id } = useParams<ParamTypes>();
  return (
    <MainLayout>
      <h1>Project ID: {id}</h1>
    </MainLayout>
  );
};

export default Projects;
