import { FC } from "react";
import { uid } from "utils";

//Atoms
import { UList, DList } from "../index";

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
      listType = <DList className={`dl ${classes}`}>{listItems}</DList>;
      break;
    case "ol":
      listType = <ol className={`ol ${classes}`}>{listItems}</ol>;
      break;
    default:
      listType = <UList className={`ul ${classes}`}>{listItems}</UList>;
      break;
  }
  return listType;
};

export default ListItems;
