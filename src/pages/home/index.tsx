import { FC } from "react";
import Logo from "app/components/atoms/logo";
import MainLayout from "layout/main";

const HomePage: FC = () => (
  <MainLayout>
    <Logo />
    <h1>Coming Soon</h1>
  </MainLayout>
);

export default HomePage;
