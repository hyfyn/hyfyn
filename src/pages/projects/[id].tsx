import { useRouter } from "next/router";
import { FC } from "react";
import projects from "pages/projects/projects.json";
interface ProjectProps {}

const Project: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const projectData =
    typeof id === "string"
      ? projects.find((project) => project.id === parseInt(id))
      : null;

  return projectData?.title ? (
    <h1>{projectData.title}</h1>
  ) : (
    <p>No Project found</p>
  );
};

export default Project;
