import Divider from "@common/component/Divider/Divider";
import * as styles from "./HotPost.css";

//props 뚫어서 반려동물 등록 했고/ 안했고 나누기
//반려동물 등록안했으면 -> 전체 인기글이 보이고
//반려동물 등록했을 경우 -> 그 동물을 위한 인기글 list 가 보임
//반려동물 이름 = petName

interface Post {
  id: number;
  title: string;
}

interface HotPostProps {
  petName?: string;
  posts: Post[];
}

const HotPost = ({ petName, posts }: HotPostProps) => {
  return (
    <div className={styles.hotPostContainer}>
      <p className={styles.p}>인기 게시물을 확인해보세요</p>

      <div className={styles.title}>
        {petName ? `${petName}를 위한 인기 게시글을 확인해보세요` : "반려인들이 주목하는 글 TOP 5"}
      </div>

      <div className={styles.hotPostListContainer}>
        {posts.map((post) => (
          <div key={post.id}>
            <div className={styles.postContent}>
              <div className={styles.contentId}>{post.id}</div>
              <div className={styles.contentTitle}>{post.title}</div>
            </div>
            <Divider size="small" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotPost;
