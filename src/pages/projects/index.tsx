import { FC } from "react";
import projects from "pages/projects/data/projects.json";
import Link from "next/link";
interface ParamTypes {
  id: string;
}

const Projects: FC = () => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.slug}>
          <Link href={`projects/${project.slug}`}>
            <a>
              <h1>{project.title}</h1>
              <h2>{project["subTitle"]}</h2>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
