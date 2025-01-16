import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가
import { postData } from "../../../../../shared/constant/postData";
import * as styles from "./SelectPost.css";
import Divider from "@common/component/Divider/Divider";
import { IcUnderline } from "@asset/svg";
import Content from "@common/component/Content/Content";

const PostList = () => {
  const [isActive, setIsActive] = useState(true); // true: 최신글, false: 인기글
  const navigate = useNavigate(); // 라우팅 기능 사용

  // 최신글 데이터 (createdAt 기준 정렬)
  const latestPosts = [...postData].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  // 인기글 데이터 (likeCount 기준 정렬)
  const popularPosts = [...postData].sort((a, b) => b.likeCount - a.likeCount);

  // 표시할 게시물 데이터
  const displayedPosts = isActive ? latestPosts : popularPosts;

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <button type="button" className={styles.tabButton({ isActive: isActive })} onClick={() => setIsActive(true)}>
          최신글
          {isActive && (
            <IcUnderline
              style={{
                position: "absolute",
                bottom: "-1.2rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2.4rem",
              }}
            />
          )}
        </button>
        <button type="button" className={styles.tabButton({ isActive: !isActive })} onClick={() => setIsActive(false)}>
          인기글
          {!isActive && (
            <IcUnderline
              style={{
                position: "absolute",
                bottom: "-1.2rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2.4rem",
              }}
            />
          )}
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
            title={post.title}
            content={post.content}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            createdAt={isActive ? post.createdAt : post.updatedAt}
            image={post.image}
            onClick={() => navigate(`/post/${post.id}`)}
            id={0}
            updateAt={""}
            category={""}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
