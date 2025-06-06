import { useFormContext } from "react-hook-form";
import { ReviewFormData } from "@app/review/write/page";
import TextArea from "@app/community/_component/TextArea/TextArea";
import * as styles from "./ReviewContent.style.css";

const ReviewContent = () => {
  const { watch, setValue } = useFormContext<ReviewFormData>();
  const contentValue = watch("content");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue("content", e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.align}>
        <h2 className={styles.title}>상세 후기</h2>
        <span className={styles.optional}>(선택)</span>
      </div>
      <TextArea
        value={contentValue}
        onChange={handleChange}
        placeholder={
          "진료 경험에 대한 상세 후기를 작성해 주세요.\n동일한 증상을 겪는 반려인들에게 큰 도움이 될 거예요!"
        }
      />
    </div>
  );
};

export default ReviewContent;
