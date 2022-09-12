import Link from "next/link";
import { FC } from "react";

import * as Styled from "./styles";

export interface CardProps {
  children: React.ReactNode;
  title: string;
  url: string;
  border?: boolean;
}

const Card: FC<CardProps> = ({ border, children, title, url }) => {
  return (
    <Styled.Card border={border}>
      <Link href={url}>
        <a>
          <Styled.CardTitle>{title}</Styled.CardTitle>
          <Styled.CardContent>{children}</Styled.CardContent>
        </a>
      </Link>
    </Styled.Card>
  );
};

export default Card;
