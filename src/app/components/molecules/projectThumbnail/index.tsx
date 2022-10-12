import { Card } from "app/components/atoms";
import { FC } from "react";

interface ProjectThumbnailProps {
  title: string;
  subTitle: string;
  url: string;
}
const ProjectThumbnail: FC<ProjectThumbnailProps> = ({
  title,
  subTitle,
  url,
  children,
}) => {
  return (
    <Card title={title} subTitle={subTitle} url={url} border={true}>
      {/* TODO: create a better layout for the component */}
      {children}
    </Card>
  );
};

export default ProjectThumbnail;
