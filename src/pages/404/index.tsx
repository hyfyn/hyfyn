import { FC } from "react";

export interface PageNotFoundProps {}

const PageNotFound: FC = () => {
  return (
    <>
      <h1>404</h1>
      <h5>👀 this is not the page your are looking for 👀</h5>
    </>
  );
};

export default PageNotFound;
