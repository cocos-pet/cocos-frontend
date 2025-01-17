import { IcoMessage, IcTest } from "@asset/svg";
import { styles } from "@common/component/Content/Content.css.ts";

interface ContentPropTypes {
  id: number;
  breed: string;
  petAge: number;
  title: string;
  content: string;
  likeIconType?: "curious" | "support";
  likeCount?: number;
  commentCount?: number;
  createdAt: string;
  updateAt: string;
  image?: string;
  category: string;
  onClick?: () => void;
}

/**
 * 게시물 컴포넌트
 * @param breed 강아지 종
 * @param age 나이
 * @param postTitle 게시물 제목
 * @param postContent 게시물 내용
 * @param likeIconType 좋아요 아이콘 타입 ( 궁금해요, 응원해요 )
 * @param likeCnt 좋아요 수
 * @param commentCnt 댓글 수
 * @param timeAgo 게시물 작성 시간
 * @param postImage 게시물 이미지
 * @param onClick 클릭 이벤트
 * @constructor minjeoong
 */

const Content = ({
  breed,
  petAge,
  title,
  content,
  likeIconType,
  likeCount,
  commentCount,
  createdAt,
  updateAt,
  image,
  onClick,
}: ContentPropTypes) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.left}>
        <div className={styles.category}>
          {breed}·{petAge}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.contents}>{content}</div>
        <div className={styles.subContents}>
          <div className={styles.item}>
            {/* 궁금해요/응원해요 아아콘 결정되면 수정 */}
            {likeIconType === "curious" ? <IcTest /> : <IcTest />}
            <span>{likeCount}</span>
          </div>
          <div className={styles.item}>
            <IcoMessage />
            <span>{commentCount}</span>
          </div>
          <div className={styles.item}>·</div>
          <div className={styles.item}>{createdAt}</div>
          <div className={styles.item}>{updateAt}</div>
        </div>
      </div>
      {image && <img src={image} alt="postImage" className={styles.postImage} />}
    </div>
  );
};

export default Content;
