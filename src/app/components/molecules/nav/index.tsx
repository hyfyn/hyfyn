import { FC, useState } from "react";
import { ListItems } from "app/components/atoms";
import { ActiveLink } from "app/components/atoms";
import { StyledNav, FixedContainer } from "./styles";
import InteractiveLogo from "app/components/atoms/logo/InteractiveLogo";
import { useRouter } from "next/router";
export interface NavProps {}

const Nav: FC = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavigation = () => {
    if (isDevelopment) {
      setIsNavOpen(!isNavOpen);
    } else {
      router.push("/");
    }
  };
  const isDevelopment = process.env.NODE_ENV === "development";
  return (
    <FixedContainer className={`${isNavOpen ? "open" : ""}`}>
      <StyledNav>
        <InteractiveLogo onClick={toggleNavigation} />
        <div className={`nav_slide ${isNavOpen ? "open" : ""}`}>
          {isDevelopment && (
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
                <ActiveLink href="/blog" activeClassName="active">
                  <a>Blog</a>
                </ActiveLink>,
                <ActiveLink href="/playground" activeClassName="active">
                  <a>Playground</a>
                </ActiveLink>,
              ]}
              className="nav_items"
            />
          )}
        </div>
      </StyledNav>
    </FixedContainer>
  );
};

export default Nav;
