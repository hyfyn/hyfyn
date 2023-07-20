import { FC } from "react";
import { uid } from "utils";

//Atoms
import { OList, UList, DList } from "./styles";

export interface ListItemsProps {
  type: "ul" | "ol" | "dl";
  items: any[];
  className?: string;
}

const ListItems: FC<ListItemsProps> = ({ className, type, items }) => {
  // use the builder pattern for creating all variations of lists (OL, UL, DL)
  const listItems = items.map((item, i) => <li key={i + uid()}>{item}</li>);
  let listType;
  switch (type) {
    case "dl":
      listType = <DList className={`dl ${className}`}>{listItems}</DList>;
      break;
    case "ol":
      listType = <OList className={`ol ${className}`}>{listItems}</OList>;
      break;
    default:
      listType = <UList className={`ul ${className}`}>{listItems}</UList>;
      break;
  }
  return listType;
};

export default ListItems;
