import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  const { q } = router.query;
  return <h1>Search {q}</h1>;
};

export default Page;
