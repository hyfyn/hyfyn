import { useRouter } from "next/router";
import { Button } from "./style";
const BackButton = () => {
  const router = useRouter();
  return <Button onClick={() => router.back()}>👈 Back</Button>;
};

export default BackButton;
