import * as styles from "./SubComment.css";
import { IcEllipses, IcMessage } from "@asset/svg";

export interface SubCommentData {
  id: number;
  nickname: string;
  breed: string;
  petAge: number;
  content: string;
  createdAt: string;
  isWriter: string;
  profileImage: string;
}

interface SubCommentProps {
  subComment: SubCommentData;
  onReplyClick?: (id: number) => void; 
}

const SubComment = ({ subComment, onReplyClick }: SubCommentProps) => {
  const handleReplyClick = () => {
    if (onReplyClick) {
      onReplyClick(subComment.id);
    }
  };

  return (
    <div className={styles.commentItem}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <img src={subComment.profileImage} className={styles.profileImage} alt="프로필 이미지" />
          <div className={styles.headerInfo}>
            <IcEllipses className={styles.containerOptionsIcon} />
            <span className={styles.nickname}>{subComment.nickname}</span>
            <span className={styles.meta}>
              {subComment.breed}·{subComment.petAge}살 · {subComment.createdAt}
            </span>
          </div>
        </div>

        <p className={styles.text}>{subComment.content}</p>

        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className={styles.replyContainer} onClick={handleReplyClick}>
          <IcMessage style={{ width: "1.8rem" }} />
          <p>답글쓰기</p>
        </div>
      </div>
    </div>
  );
};

export default SubComment;
