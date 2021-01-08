import { FC } from "react";
import { uid } from "utils";
import "./styles/listitems.css";
export interface ListItemsProps {
  type: "ul" | "ol" | "dl";
  items: any[];
  classes?: string;
}

const ListItems: FC<ListItemsProps> = ({ classes, type, items }) => {
  // use the builder pattern for creating all variations of lists (OL, UL, DL)
  const listItems = items.map((item, i) => <li key={i + uid()}>{item}</li>);
  let listType;
  switch (type) {
    case "dl":
      listType = <dl className={`dl ${classes}`}>{listItems}</dl>;
      break;
    case "ol":
      listType = <ol className={`ol ${classes}`}>{listItems}</ol>;
      break;
    default:
      listType = <ul className={`ul ${classes}`}>{listItems}</ul>;
      break;
  }
  return listType;
};

export default ListItems;
