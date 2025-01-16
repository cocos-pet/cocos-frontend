import * as styles from "./SubComment.css";
import { IcEllipses, IcMessage } from "@asset/svg";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";

export interface SubCommentData {
  id: number;
  nickname: string;
  breed: string;
  petAge: number;
  content: string;
  createdAt: string;
  isWriter: boolean;
  profileImage: string;
  mentionedNickname: string;
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

  const renderContent = () => {
    const { content, mentionedNickname } = subComment;
    //mention 변수에 @ 추가하기
    const mention = `@${mentionedNickname}`;
    const parts = content.split(mention);
    return (
      <>
        <span className={styles.mentionedNickname}>{mention} </span>
        {parts[0]}
        {parts.slice(1).join(mention)}
      </>
    );
  };

  const onDelete = () => {
    // TODO : 대댓글 삭제
  };

  return (
    <div className={styles.commentItem}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <img
            src={subComment.profileImage}
            className={styles.profileImage}
            alt="프로필 이미지"
          />
          <div className={styles.headerInfo}>
            <span className={styles.nickname}>{subComment.nickname}</span>
            <span className={styles.meta}>
              {subComment.breed} · {subComment.petAge}살 ·{" "}
              {subComment.createdAt.toLocaleString()}
            </span>
          </div>
          <MoreModal iconSize={24} onDelete={onDelete} />
        </div>
        <p className={styles.text}>{renderContent()}</p>

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
