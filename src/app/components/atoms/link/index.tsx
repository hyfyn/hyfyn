import Link from "next/link";
import { ReactNode } from "react";
import StyledLink from "./style";

const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <StyledLink>
      <Link href={href}>{children}</Link>
    </StyledLink>
  );
};

export default CustomLink;
