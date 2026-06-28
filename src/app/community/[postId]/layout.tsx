import { ReactNode } from "react";
import { Metadata } from "next";
import { getPostServer } from "@api/domain/community/post/server";
import { siteConfig, resolveOgImage } from "@shared/constant/site";

type Props = {
  children: ReactNode;
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params;
  const post = await getPostServer(Number(postId));

  if (!post?.title) return { title: "게시글" };

  const description =
    post.content?.replace(/\s+/g, " ").trim().slice(0, 160) ?? siteConfig.description;
  const pageUrl = `${siteConfig.url}/community/${postId}`;
  const ogImageUrl = resolveOgImage(post.images?.[0]);

  return {
    title: post.title,
    description,
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: post.nickname ? [post.nickname] : undefined,
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImageUrl],
    },
    alternates: { canonical: pageUrl },
  };
}

export default function PostDetailLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
