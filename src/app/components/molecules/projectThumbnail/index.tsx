import { Card } from "app/components/atoms";
import { FC } from "react";

interface ProjectThumbnailProps {
  title: string;
  url: string;
}
const ProjectThumbnail: FC<ProjectThumbnailProps> = ({
  title,
  url,
  children,
}) => {
  return (
    <Card title={title} url={url} border={true}>
      {/* TODO: create a better layout for the component */}
      {children}
    </Card>
  );
};

export default ProjectThumbnail;
