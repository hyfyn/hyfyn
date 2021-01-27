import { FC } from "react";

import * as Styled from "./styles";
export interface GridProps {}

const Grid: FC<GridProps> = ({ children }) => {
  return <Styled.Grid>{children}</Styled.Grid>;
};

export default Grid;
