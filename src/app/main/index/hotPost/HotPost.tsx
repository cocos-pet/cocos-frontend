"use client";

import * as styles from "./HotPost.css";
import Divider from "@common/component/Divider/Divider";
import {useQueryGetPopular} from "@api/domain/main/hook";
import {PATH} from "@route/path";
import {useRouter} from "next/navigation";

interface HotPostProps {
  nickname?: string;
}

const HotPost = ({ nickname }: HotPostProps) => {
  const router = useRouter();

  const { data: postsData, isLoading, isError } = useQueryGetPopular();

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (isError || !postsData?.data?.posts) {
    return <p>데이터를 불러오는 데 실패했습니다.</p>;
  }

  const posts = postsData.data.posts || [];
  const handlePostClick = (postId?: number) => {
    if (postId !== undefined) {
      router.push(`${PATH.COMMUNITY.ROOT}/${postId}`);
    }
  };

  return (
    <div className={styles.hotPostContainer}>
      <p className={styles.p}>인기 게시물을 확인해보세요</p>

      <div className={styles.title}>
        {nickname ? (
          <>
            <span className={styles.nickname}>{nickname}</span>를 위한 인기 게시글을 확인해보세요
          </>
        ) : (
          "반려인들이 주목하는 글 TOP 5"
        )}
      </div>

      <div className={styles.hotPostListContainer}>
        {posts.slice(0, 5).map((post, index) => (
          <div key={post.id} className={styles.postlist}>
            <div className={styles.postContent} onClick={() => handlePostClick(post.id)}>
              <div className={styles.contentId}>{index + 1}</div>
              <div className={styles.contentTitle}>{post.title}</div>
            </div>
            {post.id !== posts.slice(0, 5)[posts.slice(0, 5).length - 1]?.id && <Divider size="popular" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotPost;
