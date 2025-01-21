import SubComment from "./SubComment";
import { commentGetRequestSubCommentType } from "@api/domain/community/post";

interface SubCommentListProps {
  subComments: commentGetRequestSubCommentType[];
  onCommentDelete?: () => void;
}

const SubCommentList = ({
  subComments,
  onCommentDelete,
}: SubCommentListProps) => {
  return (
    <div>
      {subComments?.map((subComment) => (
        <SubComment
          key={subComment.id}
          subComment={subComment}
          onCommentDelete={onCommentDelete}
        />
      ))}
    </div>
  );
};

export default SubCommentList;
