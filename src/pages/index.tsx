import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  IntroTitle,
  ScrollIndicator,
  ScreenWrap,
  Grid,
} from "app/components/atoms";
import { ContentSection, ProjectThumbnail } from "app/components/molecules";
import projects from "pages/projects/projects.json";
const HomePage: FC = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => setDisplay(true), 3000);
  });
  return (
    <>
      {/* <Logo /> */}
      <ScreenWrap>
        <IntroTitle>
          Welcome To <span>HyFyn</span>
        </IntroTitle>
        <ScrollIndicator className={display ? "display" : ""} />
      </ScreenWrap>

      <ContentSection
        h1="Created by Matt Sobieray"
        h2="Software Engineer and Team Lead at Kinsta"
      />
      <ContentSection h1="Projects" h2="A Decade of Work">
        {/* <ProjectThumbnails amount={3}> */}
        <Grid columns={3}>
          {projects.map((project, i) => (
            <ProjectThumbnail
              title={project.title}
              url={`/projects/${project.id}`}
              key={project.id}
            >
              <div>
                <Image
                  src={project["image-path"]}
                  width={300}
                  height={300}
                  layout="responsive"
                />
              </div>
              <div>
                <p>{project.description}</p>
              </div>
            </ProjectThumbnail>
          ))}
        </Grid>
      </ContentSection>
      <ContentSection h1="Blog" h2="Coming Soon">
        {/* <BlogTumbnails amount={3}> */}
      </ContentSection>
    </>
  );
};

export default HomePage;
