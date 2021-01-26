import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import ListItems from "app/components/atoms/listItems";

export interface NavProps {}

const Nav: FC = () => {
  const location = useLocation();
  const isActive = () => {
    return location.pathname.split("/")[1];
  };
  return (
    <ListItems
      type="ul"
      items={[
        <Link className={isActive() === "" ? "active" : undefined} to="/">
          Home
        </Link>,
        <Link
          className={isActive() === "about" ? "active" : undefined}
          to="/about"
        >
          About
        </Link>,
        <Link
          className={isActive() === "repos" ? "active" : undefined}
          to="/repos"
        >
          Repos
        </Link>,
        <Link
          className={isActive() === "project" ? "active" : undefined}
          to="/project/1"
        >
          Projects
        </Link>,
      ]}
      classes="nav"
    />
  );
};

export default Nav;
