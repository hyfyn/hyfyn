import { FC } from "react";
import MainLayout from "layout/main";
export interface PageNotFoundProps {}

const PageNotFound: FC = () => {
  return (
    <MainLayout>
      <h1>404</h1>
      <h5>👀 this is not the page your are looking for 👀</h5>
    </MainLayout>
  );
};

export default PageNotFound;
