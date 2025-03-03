import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "코코스",
  description: "반려동물 증상을 겪는 반려인들이 고민을 공유하고 병원 정보를 확인할 수 있는 서비스",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko" style={{ scrollbarWidth: "none" }}>
      {/*<head>*/}
      {/*<meta charSet="UTF-8" />*/}
      {/*<link rel="icon" type="image/svg+xml" href="/public/cocos2.svg" />*/}
      {/*<meta name="viewport" content="width=device-width, initial-scale=1.0" />*/}
      {/*<title>코코스</title>*/}
      {/*</head>*/}
      <body>
        <div id="root">{children}</div>
        {/*<div id="root"></div>*/}
        {/*<script type="module" src="/src/main.tsx"></script>*/}
      </body>
    </html>
  );
}
