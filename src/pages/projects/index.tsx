import { FC } from "react";
import projects from "pages/projects/projects.json";
interface ParamTypes {
  id: string;
}

const Projects: FC = () => {
  return (
    <div>
      {projects.map((project) => (
        <>
          <h1>{project.title}</h1>
          <h2>{project["sub-title"]}</h2>
        </>
      ))}
    </div>
  );
};

export default Projects;
