import { FC } from "react";

import * as Styled from "./styles";

export interface CardProps {
  children: React.ReactNode;
  title: string;
  url: string;
}

const Card: FC<CardProps> = ({ children, title, url }) => {
  return (
    <Styled.Card>
      <Styled.CardTitle>
        <a href={url}>{title}</a>
      </Styled.CardTitle>
      <div className="card__content">{children}</div>
    </Styled.Card>
  );
};

export default Card;
