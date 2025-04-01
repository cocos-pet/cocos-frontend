"use client";
import SubComment from "./SubComment";
import {commentGetRequestSubCommentType} from "@api/domain/community/post";

interface SubCommentListProps {
  commentId: number | undefined;
  subComments: commentGetRequestSubCommentType[];
  onSubCommentReplyClick?: (nickname: string | undefined, commentId: number | undefined) => void;
  onCommentDelete: (id: number) => void;
  onModalClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const SubCommentList = ({
  commentId,
  subComments,
  onSubCommentReplyClick,
  onCommentDelete,
  onModalClose,
}: SubCommentListProps) => {
  return (
    <div onClick={onModalClose}>
      {subComments?.map((subComment) => (
        <SubComment
          key={subComment.id}
          subComment={subComment}
          commentId={commentId}
          onCommentDelete={() => {
            onCommentDelete(subComment.id as number);
          }}
          onSubCommentReplyClick={onSubCommentReplyClick}
          onModalClose={onModalClose}
        />
      ))}
    </div>
  );
};

export default SubCommentList;
