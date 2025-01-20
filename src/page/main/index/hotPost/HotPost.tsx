import { useNavigate } from "react-router-dom";
import * as styles from "./HotPost.css";
import Divider from "@common/component/Divider/Divider";
import { useQueryGetPopular } from "@api/domain/main/hook"; // `useQueryGetPopular` import 확인

interface Post {
  id?: number; // id가 optional로 설정
  title?: string; // title도 optional로 설정
}

interface HotPostProps {
  petName?: string;
}

const HotPost = ({ petName }: HotPostProps) => {
  const navigate = useNavigate();

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
      navigate(`/community/${postId}`);
    }
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
        {posts.map((post, index) => (
          <div key={post.id}>
            <div className={styles.postContent} onClick={() => handlePostClick(post.id)}>
              <div className={styles.contentId}>{index + 1}</div>
              <div className={styles.contentTitle}>{post.title}</div>
            </div>
            {post.id !== posts[posts.length - 1]?.id && <Divider size="small" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotPost;
