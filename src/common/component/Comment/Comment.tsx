import * as styles from "./Comment.css";
import { IcEllipses, IcMessage } from "@asset/svg";

// 서브 댓글 타입
interface SubComment {
  id: number;
  profileImage: string;
  nickname: string;
  breed: string;
  petAge: number;
  content: string;
  createdAt: Date;
  isWriter: boolean;
}

// 댓글 타입
export interface CommentType {
  id: number;
  profileImage: string;
  nickname: string;
  breed: string;
  petAge: number;
  content: string;
  createdAt: Date;
  isWriter: boolean;
  subComments: SubComment[] | []; // 서브 댓글 배열
}

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <img
            src={comment.profileImage}
            className={styles.profileImage}
            alt="프로필 이미지"
          />
          <div className={styles.headerInfo}>
            <IcEllipses className={styles.containerOptionsIcon} />
            <span className={styles.nickname}>{comment.nickname}</span>
            <span className={styles.meta}>
              {comment.breed}·{comment.petAge}살 ·{" "}
              {comment.createdAt.toLocaleString()}
            </span>
          </div>
        </div>

        <p className={styles.text}>{comment.content}</p>

        <div className={styles.replyContainer}>
          <IcMessage />
          <p>답글쓰기</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
