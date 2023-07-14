import { FC, useEffect, useState } from "react";
import Image from "next/image";
import {
  IntroTitle,
  ScrollIndicator,
  ScreenWrap,
  Grid,
  Link,
  Section,
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
      <Section>
        <ScreenWrap>
          <IntroTitle>
            Welcome To <span>HyFyn</span>
          </IntroTitle>
          <ScrollIndicator className={display ? "display" : ""} />
        </ScreenWrap>
      </Section>
      <ContentSection
        h1="Created by Matt Sobieray"
        h2="Software Engineer and Team Lead at Kinsta"
      />
      <ContentSection h1="About" h2="Designer Turned Developer">
        <div>
          <Grid displayType="flex">
            <Avatar />
            <p>
              👋 Welcome to HyFyn, a company I started while I was freelancing.
              The name was because people would greet my dog "Hi, Finn" and it
              sounded like they were saying hyphen (HyFyn). I have closed the
              company, but I kept the moniker for my online identity.
            </p>
          </Grid>
        </div>
        <p>
          I spend my time keeping up with the JavaScripts and I am currently
          focused on full-stack TypeScript with Next.js, GraphQL, and Prisma. I
          am also infatuated with Web3 and taking baby steps into lower level
          languages by learning Rust with Solana.
        </p>
        <p>
          In the past I did design work and primarily used WordPress to build
          sites. I have a strong background with WordPress and some experience
          with PHP but I mostly focus on JS nowadays.
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
        <Link href="/projects">All Work 👉</Link>
        {/* <i>more projects coming soon - 👆 my past 4 years</i> */}
      </ContentSection>
      <ContentSection h1="Blog" h2="Coming Soon">
        {/* <BlogTumbnails amount={3}> */}
      </ContentSection>
    </>
  );
};

export default HomePage;
