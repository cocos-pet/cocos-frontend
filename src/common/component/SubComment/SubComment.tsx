import * as styles from "./SubComment.css";
import { IcMessage } from "@asset/svg";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useModalStore from "@store/moreModalStore.ts";
import { SubCommentType } from "@common/component/Comment/Comment.tsx";
import { v4 as uuidv4 } from "uuid";

interface SubCommentProps {
  subComment: SubCommentType;
  onReplyClick?: (id: number | undefined) => void;
}

const SubComment = ({ subComment, onReplyClick }: SubCommentProps) => {
  const handleReplyClick = () => {
    if (onReplyClick) {
      onReplyClick(subComment.id);
    }
  };

  const { openModalId, setOpenModalId } = useModalStore();
  const uniqueId = uuidv4(); // 댓글 삭제 모달을 위한 고유 id

  const renderContent = () => {
    const { content, mentionedNickname } = subComment;
    if (!content) {
      return;
    }
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
              {subComment.createdAt
                ? subComment.createdAt.toLocaleString()
                : ""}
            </span>
          </div>
          <MoreModal
            iconSize={24}
            onDelete={onDelete}
            isOpen={openModalId === Number(uniqueId)}
            onToggleModal={() => setOpenModalId(uniqueId)}
          />
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
