import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack } from "@asset/svg/index";
import ReviewSymptom from "@app/review/write/_component/ReviewSymptom";
import ReviewPurpose from "@app/review/write/_component/ReviewPurpose";
import ReviewDisease from "@app/review/write/_component/ReviewDisease";
import * as styles from "./Step2.style.css";
import { Button } from "@common/component/Button";
import { useState } from "react";
import SearchSymptomDisease from "@app/review/write/_component/SearchSymptomDisease";

const Step2 = () => {
  // 바텀시트 열고 닫기
  const [open, setOpen] = useState(false);

  // 증상& 바텀시트 열기
  const handleOpenBottomSheet = () => {
    setOpen(true);
  };

  const handleGoBack = () => {
    console.log("뒤로가기 구현 예정");
  };

  const handleNext = () => {
    console.log("다음 구현 예정, 활성화도!");
  };

  return (
    <>
      {/* 상단 헤더 */}
      <HeaderNav centerContent="리뷰작성(2/4)" leftIcon={<IcDeleteBlack style={{ width: 24, height: 24 }} />} />
      <div className={styles.wrapper}>
        {/* 2-1. 증상 */}
        <ReviewSymptom handleOpenBottomSheet={handleOpenBottomSheet} />

        {/* 2-2. 방문 목적 */}
        <ReviewPurpose />

        {/* 2-3. 진단 내용 */}
        <ReviewDisease handleOpenBottomSheet={handleOpenBottomSheet} />
      </div>

      {/* 하단 버튼 */}
      <div className={styles.btnLayout}>
        <Button label="이전으로" size="large" variant="solidNeutral" disabled={false} onClick={handleGoBack} />
        <Button label="다음으로" size="large" variant="solidPrimary" disabled={true} onClick={handleNext} />
      </div>

      {/* 증상 진단 바텀시트 */}
      <SearchSymptomDisease isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Step2;
