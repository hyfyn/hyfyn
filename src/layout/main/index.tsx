import { FC } from "react";
import { MainLayout } from "../css/main"

const mainLayout: FC = ({ children }) => (
  <MainLayout className="App">{children}</MainLayout>
);

export default mainLayout;
