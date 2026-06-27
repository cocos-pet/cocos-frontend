import { ReactNode } from "react";
import { Metadata } from "next";
import { getPostServer } from "@api/domain/community/post/server";
import PostArticleJsonLd from "@shared/component/Seo/PostArticleJsonLd";
import { siteConfig } from "@shared/constant/site";

type PostDetailLayoutProps = {
  children: ReactNode;
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({ params }: PostDetailLayoutProps): Promise<Metadata> {
  const { postId } = await params;
  const post = await getPostServer(Number(postId));

  if (!post?.title) {
    return { title: "게시글" };
  }

  const description =
    post.content?.replace(/\s+/g, " ").trim().slice(0, 160) ?? siteConfig.description;
  const pageUrl = `${siteConfig.url}/community/${postId}`;

  return {
    title: post.title,
    description,
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: pageUrl,
      images: post.images?.[0] ? [{ url: post.images[0] }] : undefined,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: post.nickname ? [post.nickname] : undefined,
      section: post.category,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function PostDetailLayout({ children, params }: PostDetailLayoutProps) {
  const { postId } = await params;
  const post = await getPostServer(Number(postId));

  return (
    <>
      {post?.title && <PostArticleJsonLd post={post} postId={postId} />}
      {children}
    </>
  );
}
