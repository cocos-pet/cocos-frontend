import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ko" style={{ scrollbarWidth: 'none' }}>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/cocos2.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>코코스</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="maze-script"
          src="/maze-script.js"
          strategy="afterInteractive"
        />
      </body>
    </Html>
  );
} 