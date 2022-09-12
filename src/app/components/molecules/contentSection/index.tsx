import { FC, ReactNode } from "react";
import { SectionHeading, Section } from "app/components/atoms";

interface ContentSectionProps {
  h1: string;
  h2?: string;
  children?: ReactNode;
}
const ContentSection: FC<ContentSectionProps> = ({ h1, h2, children }) => (
  <Section>
    <header>
      <SectionHeading.H1>{h1}</SectionHeading.H1>
      <SectionHeading.H2>{h2}</SectionHeading.H2>
    </header>
    <main>{children}</main>
  </Section>
);

export default ContentSection;
