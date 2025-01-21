import SubComment from "./SubComment";
import { commentGetRequestSubCommentType } from "@api/domain/community/post";

interface SubCommentListProps {
  subComments: commentGetRequestSubCommentType[];
  onSubCommentReplyClick?: (
    nickname: string | undefined,
    commentId: number | undefined
  ) => void;
}

const SubCommentList = ({
  subComments,
  onSubCommentReplyClick,
}: SubCommentListProps) => {
  return (
    <div>
      {subComments?.map((subComment) => (
        <SubComment
          key={subComment.id}
          subComment={subComment}
          onSubCommentReplyClick={onSubCommentReplyClick}
        />
      ))}
    </div>
  );
};

export default SubCommentList;
