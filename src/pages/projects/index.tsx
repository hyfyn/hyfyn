import { FC } from "react";
import { useParams } from "react-router-dom";
interface ParamTypes {
  id: string;
}

const Projects: FC = () => {
  const { id } = useParams<ParamTypes>();
  return (
      <h1>Project ID: {id}</h1>
  );
};

export default Projects;
