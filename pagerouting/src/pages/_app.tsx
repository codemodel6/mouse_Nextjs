import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

/* 
  이 페이지는 root 컴포넌트의 역할을 한다.(모든 페이지의 부모 페이지)
  Component : 현재 페이지 역할을 할 컴포넌트를 받는다
  pageProps : Component에 전달할 Props를 저장한 객체

  <Link>/router.push - Client Side Rendering 으로 페이지를 이동시킨다

  프리페칭 - 사전에 미리 불러온다.
  현재 보고있는 페이지에서 링크들로 연결되어있는 페이지를 미리 불러와 사용자들이 페이지 이동을 빠르게 할 수 있도록 해준다
  그렇기 때문에 Client Side Rendering처럼 빠르게 페이지 이동이 가능하다
  개발자도구 -> 네트워크탭에서 확인 가능
  npm run build를 통해 페이지별로 출력된 빌드 결과로 용량을 확인할 수 있다. 빌드를 해야 프로덕션 모드에 적용이 되는듯 하다
  npm run start를 통해 프로덕션 모드로 실행 가능
  npm run dev 는 개발자 모드이다
*/
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const handleRouter = () => {
    router.push("/test");
  };

  useEffect(() => {
    // 특정 페이지를 프리페이징 하는 코드. /test 페이지를 프리페칭한다
    router.prefetch("/test");
  }, []);

  return (
    // <>
    //   <header>
    //     <Link href={"/"}>index</Link>
    //     &nbsp;
    //     {/* Link의 기능. 해당 페이지는 프리페칭 하지 않는다 */}
    //     <Link href={"/search"} prefetch={false}>
    //       saerch
    //     </Link>
    //     &nbsp;
    //     <Link href={"/book/1"}>book/1</Link>
    //     <button onClick={handleRouter}>/test 페이지로 이동</button>
    //   </header>
    //   <main>
    //     <Component {...pageProps} />
    //   </main>
    //   <footer></footer>
    // </>
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
