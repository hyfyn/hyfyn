import { FC } from "react";
import blogData from "data/blog.json";
import Image from "next/image";
import { ProjectThumbnail } from "app/components/molecules";
import { Grid, Section } from "app/components/atoms";

const Projects: FC = () => {
  return (
    <Section>
      <Grid columns={3} displayType="grid" style={{ marginTop: "3em" }}>
        {blogData.map((blog) => (
          <ProjectThumbnail
            title={blog.title}
            subTitle={blog.subTitle}
            url={`/blog/${blog.slug}`}
            key={blog.slug}
          >
            <Image
              src={blog.imagePath}
              width={300}
              height={300}
              layout="responsive"
            />
            <figcaption>{blog.description}</figcaption>
          </ProjectThumbnail>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
