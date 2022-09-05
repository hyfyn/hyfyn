import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import ListItems from "app/components/atoms/listItems";

export interface NavProps {}

const Nav: FC = () => {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  return (
    <ListItems
      type="ul"
      items={[
        <Link href="/">Home</Link>,
        <Link
          href="/about"
          className={pathname === "/about" ? "active" : undefined}
        >
          About
        </Link>,
        <Link
          href="/repos"
          className={pathname === "/repos" ? "active" : undefined}
        >
          Repos
        </Link>,
        <Link
          href="/projects"
          className={pathname === "/projects" ? "active" : undefined}
        >
          Projects
        </Link>,
      ]}
      classes="nav"
    />
  );
};

export default Nav;
