import Chip from "@common/component/Chip/Chip";
import * as styles from "./ReviewPurpose.style.css";
import { usePurposeGet } from "@app/api/review/write/hook";
import { useFormContext } from "react-hook-form";
import { ReviewFormData } from "@app/review/write/page";

const ReviewPurpose = () => {
  const { data } = usePurposeGet();
  const { watch, setValue } = useFormContext<ReviewFormData>();
  const selectedPurposeId = watch("purposeId");

  const handleSelect = (id: number) => {
    setValue("purposeId", selectedPurposeId === id ? -1 : id);
  };

  return (
    <div>
      <section className={styles.wrapper}>
        <div>
          <span className={styles.questionStyle}>어떤 목적으로 방문했나요?</span>
          <span className={styles.starStyle}>*</span>
        </div>
        <div className={styles.chipLayout}>
          {data?.purposes?.map((purpose) => (
            <Chip
              key={purpose.id}
              label={purpose.label ?? ""}
              isSelected={selectedPurposeId === purpose.id}
              onClick={() => {
                if (purpose.id !== undefined) {
                  handleSelect(purpose.id);
                }
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewPurpose;
