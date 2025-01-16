import * as styles from "./Comment.css";
import { IcEllipses, IcMessage } from "@asset/svg";
import SubCommentList from "../SubComment/SubCommentList";

export interface SubComment {
  id: number;
  profileImage: string;
  nickname: string;
  breed: string;
  petAge: number;
  content: string;
  createdAt: Date;
  isWriter: boolean;
  mentionedNickname: string;
}

export interface CommentType {
  id: number;
  profileImage: string;
  nickname: string;
  breed: string;
  petAge: number;
  content: string;
  createdAt: Date;
  isWriter: boolean;
  subComments: SubComment[]; // 대댓글 배열
}

interface CommentProps {
  comment: CommentType;
  onReplyClick?: (id: number) => void;
}

const Comment = ({ comment, onReplyClick }: CommentProps) => {
  const handleReplyClick = () => {
    if (onReplyClick) {
      onReplyClick(comment.id);
    }
  };

  return (
    <div className={styles.commentItem}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <img src={comment.profileImage} className={styles.profileImage} alt="프로필 이미지" />
          <div className={styles.headerInfo}>
            <IcEllipses className={styles.containerOptionsIcon} />
            <span className={styles.nickname}>{comment.nickname}</span>
            <span className={styles.meta}>
              {comment.breed} · {comment.petAge}살 · {comment.createdAt.toLocaleString()}
            </span>
          </div>
        </div>

        <p className={styles.text}>{comment.content}</p>

        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className={styles.replyContainer} onClick={handleReplyClick}>
          <IcMessage style={{ width: "1.8rem" }} />
          <p>답글쓰기</p>
        </div>
      </div>

      {/* 대댓글 리스트 */}
      {comment.subComments.length > 0 && (
        <div>
          <SubCommentList subComments={comment.subComments} />
        </div>
      )}
    </div>
  );
};

export default Comment;
