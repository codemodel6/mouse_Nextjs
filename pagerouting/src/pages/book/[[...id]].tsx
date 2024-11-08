/* 
  /book/1 /book/2 등 뒤에 어떠한 id가 오더라도 이 페이지를 보여준다 
  [id]일 경우 하나의 경로만 찾지만 [...id]로 할 경우 id/1/hi 를 /를 기준으로 잘라 배열로 가져온다 -> catch all segment
  하지만 두 경우 모두 /book 뒤에 /가 아무것도 없다면 대응 할 수 없다.
  이 경우 [[...id]]로 설정한다면 모든 경우를 대응 할 수 있다 -> optional catch all segment
*/
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  console.log(router); // query.id 에 url에 입력한 쿼리스트링이 있다.

  const { id } = router.query;
  return <h1>Book {id}</h1>;
};

export default Page;
