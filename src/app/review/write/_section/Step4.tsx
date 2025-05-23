import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack } from "@asset/svg/index";
import { Button } from "@common/component/Button";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";

import * as styles from "./Step4.style.css";
import ReviewContent from "@app/review/write/_component/ReviewContent";
import ReviewImg from "@app/review/write/_component/ReviewImg";
import { useState } from "react";

interface Step4Props {
  onNext: () => void;
}

const Step4 = ({ onNext }: Step4Props) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleGoBack = () => console.log("뒤로가기 구현 예정");

  const handleNext = () => {
    handleOpenBottomSheet();
  };

  return (
    <div className={styles.wrapper}>
      {/* 상단 리뷰 영역 */}
      <HeaderNav centerContent="리뷰작성(3/4)" leftIcon={<IcDeleteBlack style={{ width: 24, height: 24 }} />} />
      {/* 중앙 컨텐츠 영역 */}
      <section className={styles.contentLayout}>
        {/* 4-1. 후기 작성 */}
        <ReviewContent />

        {/* 4-2. 사진 첨부 */}
        <ReviewImg />
        <span className={styles.docs}>
          서비스 운영 규정에 어긋나는 대가성 댓글은 사전 통보 없이 블라인드 처리될 수 있습니다.
        </span>
      </section>

      {/* 하단 버튼 영역 */}
      <section className={styles.btnLayout}>
        <Button label="이전으로" size="large" variant="solidNeutral" onClick={handleGoBack} />
        <Button label="다음으로" size="large" variant="solidPrimary" onClick={handleNext} />
      </section>

      <SimpleBottomSheet
        content="리뷰를 업로드할까요?"
        leftText="아니요"
        rightText="업로드하기"
        isOpen={isBottomSheetOpen}
        handleClose={handleCloseBottomSheet}
        leftOnClick={handleCloseBottomSheet}
        rightOnClick={onNext}
      />
    </div>
  );
};

export default Step4;
