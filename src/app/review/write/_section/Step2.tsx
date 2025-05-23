import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack } from "@asset/svg/index";
import ReviewSymptom from "@app/review/write/_component/ReviewSymptom";
import ReviewPurpose from "@app/review/write/_component/ReviewPurpose";
import ReviewDisease from "@app/review/write/_component/ReviewDisease";
import * as styles from "./Step2.style.css";
import { Button } from "@common/component/Button";
import { useState } from "react";
import SearchSymptomDisease from "@app/review/write/_component/SearchSymptomDisease";

import { useBodiesGet } from "@api/domain/register-pet/bodies/hook";
import { useSymptomGet } from "@api/domain/register-pet/symptom/hook";
import { useDiseaseGet } from "@api/domain/register-pet/disease/hook";

type CategoryType = "symptom" | "disease";

interface Step2Props {
  onPrev: () => void;
  onNext: () => void;
}

const Step2 = ({ onPrev, onNext }: Step2Props) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("symptom");

  const { data: diseaseData } = useBodiesGet("disease");
  const { data: symptomData } = useBodiesGet("symptom");

  const allDiseaseBodyIds =
    diseaseData?.data?.bodies?.map((body) => body.id).filter((id): id is number => id !== undefined) ?? [];
  const allSymptomBodyIds =
    symptomData?.data?.bodies?.map((body) => body.id).filter((id): id is number => id !== undefined) ?? [];

  const { data: symptomBodyData } = useSymptomGet(allSymptomBodyIds);
  const { data: diseaseBodyData } = useDiseaseGet(allDiseaseBodyIds);

  const handleOpenBottomSheet = (category: CategoryType) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  return (
    <div className={styles.backgroundColor}>
      {/* 상단 헤더 영역 */}
      <HeaderNav centerContent="리뷰작성(2/4)" leftIcon={<IcDeleteBlack />} />

      <section className={styles.wrapper}>
        {/* 2-1. 증상 선택 */}
        <ReviewSymptom
          onCategoryChange={handleOpenBottomSheet}
          symptomBodyData={symptomBodyData}
          diseaseBodyData={diseaseBodyData}
        />
        {/* 2-2. 방문 목적 */}
        <ReviewPurpose />

        {/* 2-3. 질병 선택 */}
        <ReviewDisease onCategoryChange={handleOpenBottomSheet} diseaseBodyData={diseaseBodyData} />
      </section>

      {/* 하단 버튼 영역 */}
      <section className={styles.btnLayout}>
        <Button label="이전으로" size="large" variant="solidNeutral" onClick={onPrev} />
        <Button label="다음으로" size="large" variant="solidPrimary" onClick={onNext} />
      </section>

      {/* 증상&질병 바텀시트 */}
      <SearchSymptomDisease
        isOpen={open}
        onClose={() => setOpen(false)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        symptomData={symptomData?.data}
        symptomBodyData={symptomBodyData}
        diseaseData={diseaseData?.data}
        diseaseBodyData={diseaseBodyData}
      />
    </div>
  );
};

export default Step2;
