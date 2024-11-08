import SearchableLayout from "@/components/SearchableLayout";
import { ReactNode } from "react";

export default function Home() {
  return <h1>인덱스</h1>;
}

/**
 * Home 컴포넌트도 결국 함수이고 함수는 객체이다.
 * 그렇기 때문에 메서드를 사용할 수 있고 아래의 메서드는 page 리액트 컴포넌트를
 * <SearchableLayout> 이라는 태그에 감싸져서 나오게 한다
 */
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
