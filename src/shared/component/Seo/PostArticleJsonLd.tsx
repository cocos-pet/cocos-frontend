import { components } from "@type/schema";
import { siteConfig } from "@shared/constant/site";

type PostDetail = components["schemas"]["PostDetailResponse"];

interface Props {
  post: PostDetail;
  postId: string;
}

export default function PostArticleJsonLd({ post, postId }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.content?.replace(/\s+/g, " ").trim().slice(0, 160),
    articleSection: post.category,
    author: { "@type": "Person", name: post.nickname },
    datePublished: post.createdAt,
    dateModified: post.updatedAt ?? post.createdAt,
    image: post.images?.length ? post.images : undefined,
    keywords: post.tags?.join(", "),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: siteConfig.logoUrl },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/community/${postId}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
