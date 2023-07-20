import { FC } from "react";
import Nav from "app/components/molecules/nav";
import * as Styled from "../css/main";

const MainLayout: FC = ({ children }) => (
  <div className="display-flex">
    <Nav />
    <Styled.MainLayout>{children}</Styled.MainLayout>
  </div>
);

export default MainLayout;
