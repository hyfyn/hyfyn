import { FC } from "react";
import MainLayout from "app/layout/main";
export interface AboutProps {}

const About: FC = () => {
  return (
    <MainLayout>
      <h1>About Me: Mr. Butt Stuff</h1>
    </MainLayout>
  );
};

export default About;
