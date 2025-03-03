import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko" style={{ scrollbarWidth: "none" }}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/public/cocos2.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>코코스</title>
      </head>
      <body>
        <div id="root">{children}</div>
        {/*<div id="root"></div>*/}
        {/*<script type="module" src="/src/main.tsx"></script>*/}
      </body>
    </html>
  );
}
