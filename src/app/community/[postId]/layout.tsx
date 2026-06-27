import { ReactNode } from "react";
import { Metadata } from "next";
import { getPostServer } from "@api/domain/community/post/server";
import PostArticleJsonLd from "@shared/component/Seo/PostArticleJsonLd";
import { siteConfig } from "@shared/constant/site";

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
  const ogImage = post.images?.[0];

  return {
    title: post.title,
    description,
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: pageUrl,
      images: ogImage ? [{ url: ogImage }] : undefined,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: post.nickname ? [post.nickname] : undefined,
      section: post.category,
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: post.title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    alternates: { canonical: pageUrl },
  };
}

export default async function PostDetailLayout({ children, params }: Props) {
  const { postId } = await params;
  const post = await getPostServer(Number(postId));

  return (
    <>
      {post?.title && <PostArticleJsonLd post={post} postId={postId} />}
      {children}
    </>
  );
}
