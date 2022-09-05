import { FC } from "react";
import Nav from "app/components/molecules/nav";
import * as Styled from "../css/main";

const MainLayout: FC = ({ children }) => (
  <>
    <Nav />
    <Styled.MainLayout>{children}</Styled.MainLayout>
  </>
);

export default MainLayout;
