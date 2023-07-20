import { Section } from "app/components/atoms";
import { FC } from "react";

interface PageNotFoundProps {}

const PageNotFound: FC = () => {
  return (
    <Section>
      <h1>404</h1>
      <h5>👀 this is not the page your are looking for 👀</h5>
    </Section>
  );
};

export default PageNotFound;
