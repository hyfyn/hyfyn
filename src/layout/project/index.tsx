import { ReactElement } from "react";
import { MDXProvider } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
import { BackButton, Grid, SectionHeading, Link } from "app/components/atoms";
import { Component } from "mdx/types";
interface ProjectLayoutProps {
  children: ReactElement;
  meta: {
    nextProject: string;
  };
}
const ResponsiveImage = (props: ImageProps) => (
  <Image layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage as Component<any>,
  h1: SectionHeading.H1,
  h2: SectionHeading.H2,
  a: Link as Component<any>,
};

const ProjectLayout = ({ children, ...props }: ProjectLayoutProps) => {
  return (
    <>
      <MDXProvider components={components}>
        <div className="project-layout" {...props} style={{ marginTop: "3em" }}>
          {children}
        </div>
      </MDXProvider>
      <Grid columns={2} displayType="flex">
        <BackButton />
        {props.meta.nextProject && (
          <Link href={`/projects/${props.meta.nextProject}`}>
            Next Project 👉
          </Link>
        )}
      </Grid>
    </>
  );
};

export default ProjectLayout;
