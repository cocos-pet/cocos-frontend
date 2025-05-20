import { useFormContext } from "react-hook-form";
import ColorChip from "@common/component/ColorChip/ColorChip";
import { ReviewFormData } from "@app/review/write/page";
import * as styles from "./FeedbackCategoryContent.style.css";
import { useFeedbackGet } from "@app/api/review/write/feedback/hook";

interface FeedbackCategoryContentProps {
  category: "good" | "bad";
}

const FeedbackCategoryContent = ({ category }: FeedbackCategoryContentProps) => {
  const { data } = useFeedbackGet();
  
  const { watch, setValue } = useFormContext<ReviewFormData>();

  const fieldName = category === "good" ? "goodReviewIds" : "badReviewIds";
  const selectedIds = watch(fieldName);

  const handleToggle = (id: number) => {
    const isSelected = selectedIds.includes(id);
    let updatedIds: number[];

    if (isSelected) {
      updatedIds = selectedIds.filter((item) => item !== id);
    } else {
      if (selectedIds.length >= 3) {
        return;
      }
      updatedIds = [...selectedIds, id];
    }

    setValue(fieldName, updatedIds, { shouldValidate: true });
  };

  const reviews =
    (category === "good" ? data?.goodReviews : data?.badReviews)?.filter(
      (review): review is { id: number; label: string } => review.id !== undefined && review.label !== undefined,
    ) ?? [];

  const type = category === "good" ? "blue" : "yellow";

  return (
    <div className={styles.wrapper({ type })}>
      {reviews.map(({ id, label }) => (
        <ColorChip
          key={id}
          label={label}
          type={type}
          selected={selectedIds.includes(id)}
          onClick={() => handleToggle(id)}
        />
      ))}
    </div>
  );
};

export default FeedbackCategoryContent;
