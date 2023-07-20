import { Grid, Section } from "app/components/atoms";
import { ProjectThumbnail } from "app/components/molecules";
import playground from "data/playground.json";
import Image from "next/image";
const Playground = () => {
  return (
    <Section>
      <Grid columns={3} displayType="grid">
        {playground.map((item) => (
          <ProjectThumbnail
            title={item.title}
            subTitle={item.subTitle}
            url={`/playground/${item.slug}`}
            key={item.slug}
          >
            <Image
              src={item.imagePath}
              width={300}
              height={300}
              layout="responsive"
            />
            <figcaption>{item.description}</figcaption>
          </ProjectThumbnail>
        ))}
      </Grid>
    </Section>
  );
};

export default Playground;
