import type { Metadata } from 'next';
import { Providers } from './providers';
import '../style/global.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '코코스',
  description: '코코스 웹 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" style={{ scrollbarWidth: 'none' }}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/cocos2.svg" />
      </head>
      <body>
        <Script id="maze-universal-script">
          {`
          (function (m, a, z, e) {
            var s, t;
            try {
              t = m.sessionStorage.getItem('maze-us');
            } catch (err) {}

            if (!t) {
              t = new Date().getTime();
              try {
                m.sessionStorage.setItem('maze-us', t);
              } catch (err) {}
            }

            s = a.createElement('script');
            s.src = z + '?apiKey=' + e;
            s.async = true;
            a.getElementsByTagName('head')[0].appendChild(s);
            m.mazeUniversalSnippetApiKey = e;
          })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '24c38619-ca44-4b0a-9f5b-14ca17f9af76');
          `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
} 