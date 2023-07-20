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
        h2="Web Developer and Front-End Software Engineer"
      />
      <ContentSection h1="HyFyn" h2="A Tribute to My Dog">
        <div>
          <Grid displayType="flex">
            <Avatar />
            <p>
              HyFyn is a company I started while freelancing. The story behind
              the company name is from people greeting my dog "Hi, Finn" which
              then became HyFyn. I do still freelance but the company has closed
              and I now work at Kinsta. I held onto the moniker for my online
              identity and branding.
            </p>
          </Grid>
        </div>
        <p>
          Currently I focus on JavaScript by building web apps using TypeScript
          with React, Next.js, GraphQL, and Prisma.
        </p>
        <p>
          10 years ago my career began by using WordPress to build web sites. My
          background with WordPress led me into PHP and Laravel with a passion
          for Vue.js.
        </p>
      </ContentSection>
      <ContentSection h1="Prior Work" h2="A Decade of Learning">
        <Grid columns={3} displayType="grid" responsive={true}>
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
