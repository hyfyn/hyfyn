import { FC } from "react";
import projectsData from "data/projects.json";
import Image from "next/image";
import { ProjectThumbnail } from "app/components/molecules";
import { Grid } from "app/components/atoms";
const Projects: FC = () => {
  return (
    <Grid columns={4} displayType="grid" style={{ marginTop: "3em" }}>
      {projectsData.map((project) => (
        <ProjectThumbnail
          title={project.title}
          subTitle={project.subTitle}
          url={`/projects/${project.slug}`}
          key={project.slug}
        >
          <Image
            src={project.imagePath}
            width={300}
            height={300}
            layout="responsive"
          />
          <figcaption>{project.description}</figcaption>
        </ProjectThumbnail>
      ))}
    </Grid>
  );
};

export default Projects;
