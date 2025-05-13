import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { components } from "@type/schema";
import { usePostPostFilters } from "@api/domain/community/search/hook.ts";
import { postPostFiltersRequestType } from "@api/domain/community/search";
import * as styles from "@app/community/detail/SymptomDetail.css.ts";
import Content from "@common/component/Content/Content.tsx";
import { PATH } from "@route/path.ts";
import { formatTime } from "@shared/util/formatTime.ts";
import Image from "next/image";
import nocategory from "@asset/image/nocategory.png";
import { LoadingFallback } from "@app/community/detail/_section/index.tsx";

const EmptyState = () => (
  <div className={styles.emptyContainer}>
    <Image src={nocategory} alt="게시글 없음." style={{ objectFit: "cover" }} width={276} height={155} />
    <h1> 아직 등록된 게시글이 없어요 </h1>
  </div>
);

const CommunityDetailContent = () => {
  const searchParams = useSearchParams();
  const typeId = searchParams?.get("id");
  const [posts, setPosts] = useState<components["schemas"]["PostResponse"][]>([]);
  const { mutate: fetchPosts, isPending } = usePostPostFilters();
  const router = useRouter();

  const fetchPostData = useCallback(() => {
    if (!typeId) return;

    const filterPayload: postPostFiltersRequestType = {
      sortBy: "RECENT",
      bodyId: Number(typeId),
    };

    fetchPosts(filterPayload, {
      onSuccess: (data) => setPosts(data),
      onError: (error) => console.error("데이터 가져오기 실패:", error),
    });
  }, [fetchPosts, typeId]);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

  if (!typeId) return <EmptyState />;
  if (isPending || posts.length === 0) return <LoadingFallback />;

  return (
    <div className={styles.postsContainer}>
      {posts.map((post) => (
        <Content
          key={post.id}
          breed={post.breed}
          petAge={post.petAge}
          postTitle={post.title}
          postContent={post.content}
          likeCnt={post.likeCount}
          commentCnt={post.commentCount}
          postImage={post.image}
          onClick={() => router.push(`${PATH.COMMUNITY.ROOT}/${post.id}`)}
          timeAgo={formatTime(post.updatedAt as string)}
          category={post.category}
        />
      ))}
    </div>
  );
};

export default CommunityDetailContent;
