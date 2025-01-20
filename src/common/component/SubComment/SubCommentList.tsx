import SubComment from "./SubComment";
import { SubCommentType } from "@common/component/Comment/Comment.tsx";

interface SubCommentListProps {
  subComments?: SubCommentType[];
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
