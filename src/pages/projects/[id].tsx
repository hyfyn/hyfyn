import { useRouter } from "next/router";
import { FC } from "react";

interface ProjectProps {}

const Project: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Project;
