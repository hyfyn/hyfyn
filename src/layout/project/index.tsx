import { ReactElement } from "react";
import { MDXProvider } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
import { SectionHeading } from "app/components/atoms";
import Link from "next/link";
interface ProjectLayoutProps {
  children: ReactElement;
}
const ResponsiveImage = (props: ImageProps) => (
  <Image layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage,
  h1: SectionHeading.H1,
  h2: SectionHeading.H2,
  // p: Text,
  // pre: Pre,
  // code: InlineCode,
  a: Link,
};

const ProjectLayout = ({ children, ...props }: ProjectLayoutProps) => {
  return (
    <MDXProvider components={components}>
      <div className="project-layout" {...props} style={{ marginTop: "3em" }}>
        {children}
      </div>
    </MDXProvider>
  );
};

export default ProjectLayout;
