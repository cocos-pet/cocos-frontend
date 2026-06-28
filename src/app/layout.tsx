import { ReactNode } from "react";
import "@style/global.css.ts";
import Provider from "./Provider";
import { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import JsonLd from "@shared/component/Seo/JsonLd";
import { siteConfig } from "@shared/constant/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/cocos2.svg",
    shortcut: "/cocos2.svg",
    apple: "/cocos2.svg",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImageUrl,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" style={{ scrollbarWidth: "none" }}>
      <GoogleTagManager gtmId="GTM-MMTW28DS" />
      <body>
        <JsonLd />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMTW28DS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="GTM-MMTW28DS"
          />
        </noscript>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
