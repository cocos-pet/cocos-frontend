import { siteConfig } from "@shared/constant/site";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "ko-KR",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/cocos2.svg`,
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
