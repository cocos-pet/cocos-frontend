import * as styles from "./SubComment.css";
import { IcEllipses, IcMessage } from "@asset/svg";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useModalStore from "@store/moreModalStore.ts";
import { commentGetRequestSubCommentType } from "@api/domain/community/post";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet.tsx";
import { useCategoryFilterStore } from "@page/mypage/edit-pet/store/categoryFilter.ts";
import {
  useDeleteComment,
  useDeleteSubComment,
} from "@api/domain/community/post/hook.ts";

interface SubCommentProps {
  subComment: commentGetRequestSubCommentType;
  onReplyClick?: (id: number | undefined) => void;
}

const SubComment = ({ subComment, onReplyClick }: SubCommentProps) => {
  const handleReplyClick = () => {
    if (onReplyClick) {
      onReplyClick(subComment.id);
    }
  };
  const { mutate: deleteSubComment } = useDeleteSubComment(subComment.id);

  const { openModalId, setOpenModalId } = useModalStore();
  const { isOpen, setOpen } = useCategoryFilterStore();

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

  const onDeleteClick = () => {
    deleteSubComment();
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
            onDelete={() => setOpen(true)}
            isOpen={openModalId === `subComment-${subComment.id}`}
            onToggleModal={() => setOpenModalId(`subComment-${subComment.id}`)}
          />
        </div>
        <p className={styles.text}>{renderContent()}</p>

        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className={styles.replyContainer} onClick={handleReplyClick}>
          <IcMessage style={{ width: "1.8rem" }} />
          <p>답글쓰기</p>
        </div>
      </div>
      <SimpleBottomSheet
        isOpen={isOpen}
        content={"댓글을 정말 삭제할까요?"}
        handleClose={() => setOpen(false)}
        leftOnClick={() => setOpen(false)}
        leftText={"취소"}
        rightOnClick={onDeleteClick}
        rightText={"삭제할게요"}
      />
    </div>
  );
};

export default SubComment;
