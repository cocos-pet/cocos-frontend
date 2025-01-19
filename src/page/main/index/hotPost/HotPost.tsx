import { useNavigate } from "react-router-dom";
import * as styles from "./HotPost.css";
import Divider from "@common/component/Divider/Divider";

interface Post {
  id: number;
  title: string;
}

interface HotPostProps {
  petName?: string;
  posts?: Post[];
}

const HotPost = ({ petName, posts }: HotPostProps) => {
  const navigate = useNavigate();
  console.log(posts);

  const handlePostClick = (postId: number) => {
    navigate(`/community/${postId}`);
  };

  return (
    <div className={styles.hotPostContainer}>
      <p className={styles.p}>인기 게시물을 확인해보세요</p>

      <div className={styles.title}>
        {petName ? (
          <>
            <span className={styles.petName}>{petName}</span>를 위한 인기 게시글을 확인해보세요
          </>
        ) : (
          "반려인들이 주목하는 글 TOP 5"
        )}
      </div>

      <div className={styles.hotPostListContainer}>
        {posts?.map((post, index) => (
          <div key={post.id}>
            <div className={styles.postContent} onClick={() => handlePostClick(post.id)}>
              <div className={styles.contentId}>{post.id}</div>
              <div className={styles.contentTitle}>{post.title}</div>
            </div>
            {index !== posts.length - 1 && <Divider size="small" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotPost;
