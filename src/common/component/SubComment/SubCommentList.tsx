import SubComment from "./SubComment";
import { commentGetRequestSubCommentType } from "@api/domain/community/post";

interface SubCommentListProps {
  commentId: number | undefined;
  subComments: commentGetRequestSubCommentType[];
  onSubCommentReplyClick?: (
    nickname: string | undefined,
    commentId: number | undefined
  ) => void;
  onCommentDelete: (id: number) => void;
}

const SubCommentList = ({
  commentId,
  subComments,
  onSubCommentReplyClick,
  onCommentDelete,
}: SubCommentListProps) => {
  return (
    <div>
      {subComments?.map((subComment) => (
        <SubComment
          key={subComment.id}
          subComment={subComment}
          commentId={commentId}
          onCommentDelete={() => {
            alert(subComment.id);
            onCommentDelete(subComment.id as number);
          }}
          onSubCommentReplyClick={onSubCommentReplyClick}
        />
      ))}
    </div>
  );
};

export default SubCommentList;
