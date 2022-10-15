import { ReactElement } from "react";

interface ProjectLayoutProps {
  children: ReactElement;
}
const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return <div className="project-layout">{children}</div>;
};

export default ProjectLayout;
