import { useState } from "react";
import { postData } from "../../../../../shared/constant/postData";
import * as styles from "./SelectPost.css";
import Divider from "@common/component/Divider/Divider";
import { IcUnderline, IcMessage, IcShape } from "@asset/svg";

const PostList = () => {
  const [isActive, setIsActive] = useState(true); // true: 최신글, false: 인기글

  // 최신글 데이터 (createdAt 기준 정렬)
  const latestPosts = [...postData].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  // 인기글 데이터 (likeCount 기준 정렬)
  const popularPosts = [...postData].sort((a, b) => b.likeCount - a.likeCount);
  const displayedPosts = isActive ? latestPosts : popularPosts;

  return (
    <div className={styles.container}>
      <span className={styles.hi}>
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
          <button
            type="button"
            className={styles.tabButton({ isActive: !isActive })}
            onClick={() => setIsActive(false)}
          >
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
      </span>

      <div className={styles.postList}>
        {displayedPosts.map((post) => (
          <div key={post.id} className={styles.postItem}>
            <div className={styles.postText}>
              <div className={styles.info}>
                {post.breed}·{post.petAge}살
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postContent}>{post.content}</p>
              <div className={styles.postMeta}>
                <IcShape style={{ width: "2rem" }} />
                <span>{post.likeCount}</span>
                <IcMessage style={{ width: "2rem" }} />
                <span>{post.commentCount}</span>
                <span>{post.createdAt}</span>
              </div>
            </div>
            <div className={styles.postImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
