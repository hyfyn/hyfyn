import { FC } from "react";
import Nav from "app/components/molecules/nav";
import * as Styled from "../css/main";

const MainLayout: FC = ({ children }) => (
  <>
    {process.env.NODE_ENV === "development" ? <Nav /> : null}
    <Styled.MainLayout>{children}</Styled.MainLayout>
  </>
);

export default MainLayout;
