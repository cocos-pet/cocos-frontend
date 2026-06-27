import type { MetadataRoute } from "next";
import { isProductionDeploy, siteConfig } from "@shared/constant/site";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeploy) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth", "/login", "/onboarding", "/register-pet", "/setting", "/mypage", "/test", "/error-test", "/sentry-example-page"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
