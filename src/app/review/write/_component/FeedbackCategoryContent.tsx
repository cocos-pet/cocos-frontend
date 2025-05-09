import { useFormContext } from "react-hook-form";
import ColorChip from "@common/component/ColorChip/ColorChip";
import { ReviewFormData } from "@app/review/write/page"; // 폼 데이터 타입 import
import * as styles from "./FeedbackCategoryContent.style.css";

interface FeedbackCategoryContentProps {
  category: "good" | "bad";
}

// ⚠️ 삭제예정 목데이터
const feedbackData = {
  data: {
    goodReviews: [
      { id: 1, label: "치료 과정을 자세히 설명해줘요" },
      { id: 2, label: "진료 시간이 충분했어요" },
      { id: 3, label: "친절하게 응대해줘요" },
      { id: 4, label: "꼼꼼하게 진단해줘요" },
      { id: 5, label: "대기 시간이 짧아요" },
      { id: 6, label: "병원 시설이 깨끗해요" },
    ],
    badReviews: [
      { id: 1, label: "치료 과정 설명이 부족했어요" },
      { id: 2, label: "진료 시간이 너무 짧았어요" },
      { id: 3, label: "불친절하게 응대했어요" },
      { id: 4, label: "대기 시간이 너무 길었어요" },
      { id: 5, label: "예약 시스템이 불편했어요" },
      { id: 6, label: "병원 시설이 불청결했어요" },
    ],
  },
};

const FeedbackCategoryContent = ({ category }: FeedbackCategoryContentProps) => {
  const { watch, setValue } = useFormContext<ReviewFormData>();

  const selectedIds = watch(category === "good" ? "goodReviewIds" : "badReviewIds");

  const handleToggle = (id: number) => {
    const fieldName = category === "good" ? "goodReviewIds" : "badReviewIds";
    const selectedIds = watch(fieldName);
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

  const reviews = category === "good" ? feedbackData.data.goodReviews : feedbackData.data.badReviews;
  const type = category === "good" ? "blue" : "yellow";

  return (
    <div className={styles.wrapper({type})}>
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
