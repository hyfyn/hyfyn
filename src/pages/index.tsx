import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  IntroTitle,
  ScrollIndicator,
  ScreenWrap,
  Grid,
  Link,
} from "app/components/atoms";
import { ContentSection, ProjectThumbnail } from "app/components/molecules";
import projectsData from "data/projects.json";
import { Avatar } from "app/components/atoms";
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
      <ContentSection h1="About" h2="Designer Turned Developer">
        <div>
          <Grid displayType="flex">
            <Avatar />
            <p>
              👋 Welcome to HyFyn. HyFyn was a company I started while I was
              working as a freelance developer and designer. The name was
              because people would greet my dog "Hi, Finn" and it sounded like
              they were saying hyphen (HyFyn). The company is no more, but I
              kept the moniker for my online identity.
            </p>
          </Grid>
        </div>
        <p>
          I spend my time keeping up with the JavaScripts and I am currently
          focused on full-stack TypeScript with Next.js, GraphQL, and Prisma. I
          am also infatuated with Web3 and taking baby steps into lower level
          languages by learning Rust with Solana.
        </p>
      </ContentSection>
      <ContentSection h1="Prior Work" h2="A Decade of Learning">
        <Grid columns={3} displayType="grid">
          {projectsData.map((project) => {
            if (project.isFeatured) {
              return (
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
              );
            }
          })}
        </Grid>
        {/* <Link href="/projects">All Prior Work 👉</Link> */}
        <i>more projects coming soon - 👆 my past 4 years</i>
      </ContentSection>
      <ContentSection h1="Blog" h2="Coming Soon">
        {/* <BlogTumbnails amount={3}> */}
      </ContentSection>
    </>
  );
};

export default HomePage;
