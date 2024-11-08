import { Html, Head, Main, NextScript } from "next/document";

/*
  모든 페이지의 html페이지 컴포넌트 (index.html)
  lagn="en" -> "kr"로 바꾼다면 
*/
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
