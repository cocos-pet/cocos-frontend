"use client";

import * as styles from "./HotPost.css.ts";
import Divider from "@common/component/Divider/Divider.tsx";
import { useQueryGetPopular } from "@api/domain/main/hook.ts";
import { PATH } from "@route/path.ts";
import { useRouter } from "next/navigation";
import { Separated } from "react-simplikit";
import NoData from "@shared/component/NoData/NoData.tsx";
import Loading from "@common/component/Loading/Loading.tsx";

const HotPost = () => {
  const router = useRouter();

  const { data: postsData, isLoading, isError } = useQueryGetPopular();

  if (isLoading) {
    return <Loading height={30} />;
  }

  const posts = postsData?.data?.posts || [];

  const handlePostClick = (postId?: number) => {
    if (postId !== undefined) {
      router.push(`${PATH.COMMUNITY.ROOT}/${postId}`);
    }
  };

  return (
    <div className={styles.hotPostContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.subTitle}>인기 게시물을 확인해보세요</p>
        <div className={styles.title}>반려인들이 주목하는 글 TOP 5</div>
      </div>
      {!posts || isError ? (
        <NoData style={{ marginTop: "10px" }} />
      ) : (
        <div className={styles.hotPostListContainer}>
          <Separated by={<Divider size="popular" />}>
            {posts.slice(0, 5).map((post, index) => (
              <div key={post.id} className={styles.postlist}>
                <div className={styles.postContent} onClick={() => handlePostClick(post.id)}>
                  <div className={styles.contentId}>{index + 1}</div>
                  <div className={styles.contentTitle}>{post.title}</div>
                </div>
              </div>
            ))}
          </Separated>
        </div>
      )}
    </div>
  );
};

export default HotPost;
