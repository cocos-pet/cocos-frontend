import { siteConfig } from "@shared/constant/site";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "ko-KR",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    logo: siteConfig.logoUrl,
  },
];

export default function JsonLd() {
  return schemas.map((schema) => (
    <script
      key={schema["@type"]}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
