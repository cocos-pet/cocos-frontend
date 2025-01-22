import SubComment from "./SubComment";
import { commentGetRequestSubCommentType } from "@api/domain/community/post";

interface SubCommentListProps {
  commentId: number | undefined;
  subComments: commentGetRequestSubCommentType[];
  onSubCommentReplyClick?: (
    nickname: string | undefined,
    commentId: number | undefined
  ) => void;
}

const SubCommentList = ({
  commentId,
  subComments,
  onSubCommentReplyClick,
}: SubCommentListProps) => {
  return (
    <div>
      {subComments?.map((subComment) => (
        <SubComment
          key={subComment.id}
          commentId={commentId}
          subComment={subComment}
          onSubCommentReplyClick={onSubCommentReplyClick}
        />
      ))}
    </div>
  );
};

export default SubCommentList;
