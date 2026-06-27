import type { MetadataRoute } from "next";
import { isProductionDeploy, publicRoutes, siteConfig } from "@shared/constant/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isProductionDeploy) {
    return [];
  }

  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: "daily",
    priority: route === "/main" ? 1 : 0.8,
  }));
}
