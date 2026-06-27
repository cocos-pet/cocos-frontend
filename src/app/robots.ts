import type { MetadataRoute } from "next";
import { isProd, siteConfig } from "@shared/constant/site";

const PRIVATE_ROUTES = [
  "/auth", "/login", "/onboarding", "/register-pet",
  "/setting", "/mypage", "/test", "/error-test", "/sentry-example-page",
];

export default function robots(): MetadataRoute.Robots {
  if (!isProd) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: PRIVATE_ROUTES },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
