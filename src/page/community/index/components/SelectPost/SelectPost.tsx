import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가
import { postData } from "../../../../../shared/constant/postData";
import * as styles from "./SelectPost.css";
import Divider from "@common/component/Divider/Divider";
import { IcUnderline } from "@asset/svg";
import Content from "@common/component/Content/Content";

const PostList = () => {
  const [isRecentPost, setIsRecentPost] = useState(true); // true: 최신글, false: 인기글
  const navigate = useNavigate(); // 라우팅 기능 사용

  // 최신글 데이터 (createdAt 기준 정렬)
  const latestPosts = [...postData].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  // 인기글 데이터 (likeCount 기준 정렬)
  const popularPosts = [...postData].sort((a, b) => b.likeCount - a.likeCount);

  // 표시할 게시물 데이터
  const displayedPosts = isRecentPost ? latestPosts : popularPosts;

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <button
          type="button"
          className={styles.tabButton({ isActive: isRecentPost })}
          onClick={() => setIsRecentPost(true)}
        >
          최신글
          {isRecentPost && <IcUnderline className={styles.underline} />}
        </button>
        <button
          type="button"
          className={styles.tabButton({ isActive: !isRecentPost })}
          onClick={() => setIsRecentPost(false)}
        >
          인기글
          {!isRecentPost && <IcUnderline className={styles.underline} />}
        </button>
      </div>
      <Divider size="small" />

      {/* 게시물 리스트 */}
      <div className={styles.postList}>
        {displayedPosts.map((post) => (
          <Content
            key={post.id}
            breed={post.breed}
            petAge={post.petAge}
            postTitle={post.title}
            postContent={post.content}
            likeCnt={post.likeCount}
            commentCnt={post.commentCount}
            postImage={post.image}
            onClick={() => navigate(`/post/${post.id}`)}
            timeAgo={post.updatedAt}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
