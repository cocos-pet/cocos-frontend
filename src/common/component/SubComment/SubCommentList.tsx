import SubComment from "./SubComment";
import { commentGetRequestSubCommentType } from "@api/domain/community/post";

interface SubCommentListProps {
  subComments: commentGetRequestSubCommentType[];
  onCommentReplyClick?: (nickname: string | undefined) => void;
}

const SubCommentList = ({
  subComments,
  onCommentReplyClick,
}: SubCommentListProps) => {
  return (
    <div>
      {subComments?.map((subComment) => (
        <SubComment
          key={subComment.id}
          subComment={subComment}
          onCommentReplyClick={onCommentReplyClick}
        />
      ))}
    </div>
  );
};

export default SubCommentList;
