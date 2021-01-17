import { FC } from "react";
import "./styles/index.css";
export interface GridProps {}

const Grid: FC<GridProps> = ({ children }) => {
  return <div className="grid-2-col">{children}</div>;
};

export default Grid;
