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

const Step2 = () => {
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

  const handleGoBack = () => console.log("뒤로가기 구현 예정");
  const handleNext = () => console.log("다음 구현 예정");

  return (
    <>
      <HeaderNav centerContent="리뷰작성(2/4)" leftIcon={<IcDeleteBlack />} />
      <div className={styles.wrapper}>
        <ReviewSymptom
          onCategoryChange={handleOpenBottomSheet}
          symptomBodyData={symptomBodyData}
          diseaseBodyData={diseaseBodyData}
        />
        <ReviewPurpose />
        <ReviewDisease onCategoryChange={handleOpenBottomSheet} diseaseBodyData={diseaseBodyData} />
      </div>
      <div className={styles.btnLayout}>
        <Button label="이전으로" size="large" variant="solidNeutral" onClick={handleGoBack} />
        <Button label="다음으로" size="large" variant="solidPrimary" onClick={handleNext} />
      </div>
      <SearchSymptomDisease
        isOpen={open}
        onClose={() => setOpen(false)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        symptomBodyData={symptomBodyData}
        diseaseBodyData={diseaseBodyData}
      />
    </>
  );
};

export default Step2;
