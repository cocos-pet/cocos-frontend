"use client";
import * as styles from "./SubComment.css";
import {IcMessage} from "@asset/svg";
import MoreModal from "@shared/component/MoreModal/MoreModal.tsx";
import useModalStore from "@store/moreModalStore.ts";
import {commentGetRequestSubCommentType} from "@api/domain/community/post";
import {formatTime} from "@shared/util/formatTime.ts";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet.tsx";
import {useDeleteSubComment} from "@api/domain/community/post/hook.ts";
import React, {useState} from "react";
import {useCategoryFilterStore} from "@page/mypage/edit-pet/store/categoryFilter.ts";
import {useNavigate} from "react-router-dom";

interface SubCommentProps {
  commentId: number | undefined;
  subComment: commentGetRequestSubCommentType;
  onSubCommentReplyClick?: (nickname: string | undefined, commentId: number | undefined) => void;
  onReplyClick?: (id: number | undefined) => void;
  onCommentDelete: () => void;
  onModalClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const SubComment = ({
  commentId,
  subComment,
  onSubCommentReplyClick,
  onCommentDelete,
  onModalClose,
}: SubCommentProps) => {
  const navigate = useNavigate();
  const handleProfileClick = (nickname: string) => {
    navigate(`/profile?nickname=${nickname}`);
  };

  const handleReplyClick = () => {
    if (onSubCommentReplyClick) {
      onSubCommentReplyClick(subComment.nickname, commentId);
    }
  };
  const { mutate: deleteSubComment } = useDeleteSubComment(subComment.id);
  const { setContentsType, contentsType } = useCategoryFilterStore();

  const { openModalId, setOpenModalId } = useModalStore();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className={styles.commentItem}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <img
            src={subComment.profileImage}
            className={styles.profileImage}
            alt="프로필 이미지"
            onClick={() => handleProfileClick(subComment.nickname as string)}
          />
          <div className={styles.headerInfo}>
            <span className={styles.nickname}>
              {subComment.nickname}
              <p className={styles.blue}>{subComment.isPostWriter && "작성자"}</p>
            </span>
            <span className={styles.meta}>
              {subComment.breed} · {subComment.petAge}살 ·{" "}
              {subComment.createdAt ? formatTime(subComment.createdAt).toLocaleString() : ""}
            </span>
          </div>
          {subComment.isWriter && (
            <MoreModal
              iconSize={24}
              onDelete={() => {
                setContentsType("subComment");
                setIsOpen(true);
              }}
              isOpen={openModalId === `subComment-${subComment.id}`}
              onToggleModal={() => setOpenModalId(`subComment-${subComment.id}`)}
            />
          )}
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
        content={"대댓글을 정말 삭제할까요?"}
        handleClose={() => setIsOpen(false)}
        leftOnClick={() => setIsOpen(false)}
        leftText={"취소"}
        rightOnClick={() => {
          if (contentsType === "subComment") {
            deleteSubComment();
          } else {
            onCommentDelete();
          }
          setIsOpen(false);
        }}
        rightText={"삭제할게요"}
      />
    </div>
  );
};

export default SubComment;
