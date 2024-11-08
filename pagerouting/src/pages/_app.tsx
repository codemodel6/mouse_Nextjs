import "@/styles/globals.css";
import type { AppProps } from "next/app";

/* 
  이 페이지는 root 컴포넌트의 역할을 한다.(모든 페이지의 부모 페이지)
  Component : 현재 페이지 역할을 할 컴포넌트를 받는다
  pageProps : Component에 전달할 Props를 저장한 객체
*/
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
