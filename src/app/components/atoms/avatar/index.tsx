import Image from "next/image";
import { StyledAvatar } from "./styles";

const Avatar = () => (
  <StyledAvatar>
    <Image
      src="/images/avatar.jpeg"
      width={100}
      height={100}
      layout="fixed"
    ></Image>
  </StyledAvatar>
);

export default Avatar;
