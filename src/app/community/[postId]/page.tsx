import { getPostServer } from "@api/domain/community/post/server";
import PostArticleJsonLd from "@shared/component/Seo/PostArticleJsonLd";
import PostDetailContent from "./PostDetailContent";

type Props = {
  params: Promise<{ postId: string }>;
};

export default async function Page({ params }: Props) {
  const { postId } = await params;
  const post = await getPostServer(Number(postId));

  return (
    <>
      {post?.title && <PostArticleJsonLd post={post} postId={postId} />}
      <PostDetailContent postId={postId} initialPost={post} />
    </>
  );
}
