import { FC } from "react";
import Nav from "app/components/molecules/nav";
import * as Styled from "../css/main";

const MainLayout: FC = ({ children }) => (
  <div className="display-flex">
    {process.env.NODE_ENV === "development" ? <Nav /> : null}
    <Styled.MainLayout>{children}</Styled.MainLayout>
  </div>
);

export default MainLayout;
