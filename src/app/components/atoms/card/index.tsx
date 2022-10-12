import Link from "next/link";
import { FC } from "react";

import {
  Card as CardStyled,
  CardContent,
} from "app/components/atoms/card/styles";
import { H4, H5 } from "../sectionHeading";
export interface CardProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  url: string;
  border?: boolean;
}

const Card: FC<CardProps> = ({ border, children, title, subTitle, url }) => {
  return (
    <CardStyled border={border}>
      <Link href={url}>
        <a>
          <H4>{title}</H4>
          <H5>{subTitle}</H5>
          <CardContent>{children}</CardContent>
        </a>
      </Link>
    </CardStyled>
  );
};

export default Card;
