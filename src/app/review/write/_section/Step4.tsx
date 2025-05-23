import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack } from "@asset/svg/index";
import { Button } from "@common/component/Button";
import SimpleBottomSheet from "@common/component/SimpleBottomSheet/SimpleBottomSheet";
import { useFormContext } from "react-hook-form";
import { ReviewFormData } from "../page";
import { useReviewPost } from "@app/api/review/write/submit/hook";
import { useSearchParams } from "next/navigation";

import * as styles from "./Step4.style.css";
import ReviewContent from "@app/review/write/_component/ReviewContent";
import ReviewImg from "@app/review/write/_component/ReviewImg";
import { useState } from "react";

interface Step4Props {
  onPrev: () => void;
  onNext: () => void;
}

const Step4 = ({ onPrev, onNext }: Step4Props) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const searchParams = useSearchParams();
  const rawHospitalId = searchParams?.get("hospitalId");
  const hospitalId = rawHospitalId ? Number(rawHospitalId) : undefined;

  if (!hospitalId || Number.isNaN(hospitalId)) {
    throw new Error("유효하지 않은 병원입니다.");
  }

  const { mutate: submitReview } = useReviewPost(hospitalId);
  const { handleSubmit } = useFormContext<ReviewFormData>();

  const onValid = (data: ReviewFormData) => {
    submitReview(data, {
      onSuccess: () => {
        onNext();
      },
      onError: (error) => {
        console.error("리뷰 제출 실패", error);
      },
    });
  };

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleNext = () => {
    handleOpenBottomSheet();
  };

  const handleGoHospitalDetail = () => {
    console.log("⚠️ 조립시 구현예정");
  };

  return (
    <div className={styles.wrapper}>
      {/* 상단 리뷰 영역 */}
      <HeaderNav
        centerContent="리뷰작성(3/4)"
        leftIcon={<IcDeleteBlack style={{ width: 24, height: 24 }} onClick={handleGoHospitalDetail} />}
      />
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
        <Button label="이전으로" size="large" variant="solidNeutral" onClick={onPrev} />
        <Button label="다음으로" size="large" variant="solidPrimary" onClick={handleNext} />
      </section>

      <SimpleBottomSheet
        content="리뷰를 업로드할까요?"
        leftText="아니요"
        rightText="업로드하기"
        isOpen={isBottomSheetOpen}
        handleClose={handleCloseBottomSheet}
        leftOnClick={handleCloseBottomSheet}
        rightOnClick={handleSubmit(onValid)}
      />
    </div>
  );
};

export default Step4;
