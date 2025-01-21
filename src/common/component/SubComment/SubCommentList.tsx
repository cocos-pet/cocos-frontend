import SubComment from "./SubComment";
import { commentGetRequestSubCommentType } from "@api/domain/community/post";

interface SubCommentListProps {
  subComments: commentGetRequestSubCommentType[];
}

const SubCommentList = ({ subComments }: SubCommentListProps) => {
  return (
    <div>
      {subComments?.map((subComment) => (
        <SubComment key={subComment.id} subComment={subComment} />
      ))}
    </div>
  );
};

export default SubCommentList;
