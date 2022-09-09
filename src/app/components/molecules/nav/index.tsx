import { FC } from "react";
import ListItems from "app/components/atoms/listItems";
import { ActiveLink } from "app/components/atoms";

export interface NavProps {}

const Nav: FC = () => {
  return (
    <ListItems
      type="ul"
      items={[
        <ActiveLink href="/" activeClassName="active">
          <a>Home</a>
        </ActiveLink>,
        <ActiveLink href="/about" activeClassName="active">
          <a>About</a>
        </ActiveLink>,
        <ActiveLink href="/repos" activeClassName="active">
          <a>Repos</a>
        </ActiveLink>,
        <ActiveLink href="/projects" activeClassName="active">
          <a>Projects</a>
        </ActiveLink>,
      ]}
      classes="nav"
    />
  );
};

export default Nav;
