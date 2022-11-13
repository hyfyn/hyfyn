import { FC } from "react";
import projectsData from "data/projects.json";
import Image from "next/image";
import { ProjectThumbnail } from "app/components/molecules";
import { Grid } from "app/components/atoms";

const projectData = projectsData.filter((project) => project.isDisplayed);
const Projects: FC = () => {
  return (
    <Grid columns={3} displayType="grid" style={{ marginTop: "3em" }}>
      {projectData.map((project) => (
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
