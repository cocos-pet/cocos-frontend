import SubComment, { SubCommentData } from "./SubComment";

interface SubCommentListProps {
  subComments: SubCommentData[];
}

const SubCommentList = ({ subComments }: SubCommentListProps) => {
  return (
    <div>
      {subComments.map((subComment) => (
        <SubComment key={subComment.id} subComment={subComment} />
      ))}
    </div>
  );
};

export default SubCommentList;
