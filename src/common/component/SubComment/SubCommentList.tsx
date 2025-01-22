import SubComment from "./SubComment";
import { commentGetRequestSubCommentType } from "@api/domain/community/post";

interface SubCommentListProps {
  subComments: commentGetRequestSubCommentType[];
  onCommentDelete: (id: number) => void;
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
          onCommentDelete={() => {
            alert(subComment.id);
            onCommentDelete(subComment.id as number);
          }}
        />
      ))}
    </div>
  );
};

export default SubCommentList;
