import { FC } from "react";
import "./styles/index.css";
export interface CardProps {
  children: React.ReactNode;
  title: string;
  url: string;
}

const Card: FC<CardProps> = ({ children, title, url }) => {
  return (
    <div className="card">
      <div className="card__title">
        <a href={url}>{title}</a>
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
