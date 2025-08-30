import HeaderNav from "@common/component/HeaderNav/HeaderNav";
import { IcDeleteBlack } from "@asset/svg/index";
import { Button } from "@common/component/Button";
import SimpleBottomSheet from "src/design-system/Button/SimpleBottomSheet/SimpleBottomSheet";
import { useFormContext } from "react-hook-form";
import { ReviewFormData } from "../page";
import { useReviewPost } from "@app/api/review/write/submit/hook";
import { useSearchParams } from "next/navigation";
import axios from "axios";

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

  // presigned URL
  const [imageNames, setImageNames] = useState<string[]>([]);
  const [uploadedImageForms, setUploadedImageForms] = useState<FormData[]>([]);

  if (!hospitalId || Number.isNaN(hospitalId)) {
    throw new Error("유효하지 않은 병원입니다.");
  }

  const { mutate: submitReview } = useReviewPost(hospitalId);
  const { handleSubmit } = useFormContext<ReviewFormData>();

  const onValid = (data: ReviewFormData) => {
    submitReview(
      {
        ...data,
        gender: data.gender as "F" | "M",
        images: imageNames || undefined,
      },
      {
        onSuccess: async (res) => {
          const presignedUrls = res?.data?.data?.images;
          if (!presignedUrls || presignedUrls.length === 0) {
            alert("이미지 업로드 URL이 없습니다.");
            return;
          }

          try {
            await Promise.all(
              presignedUrls.map((url: string, index: number) => {
                const formData = uploadedImageForms[index];
                const file = formData.get("file");

                if (!file) {
                  throw new Error("FormData에 파일이 없습니다.");
                }

                return axios.put(url, file, {
                  headers: {
                    "Content-Type": (file as File).type,
                  },
                });
              })
            );

            onNext();
          } catch (uploadErr) {
            console.error("이미지 업로드 실패", uploadErr);
            alert("이미지 업로드에 실패했습니다.");
          }
        },

        onError: (error) => {
          if (
            axios.isAxiosError(error) &&
            error.response?.data?.code === 40415
          ) {
            console.log("알 수 없는 오류");
          } else {
            alert("리뷰 작성에 실패했습니다.");
          }
        },
      }
    );
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
    window.history.go(-2);
  };

  return (
    <div className={styles.wrapper}>
      {/* 상단 리뷰 영역 */}
      <HeaderNav
        centerContent="리뷰작성(3/4)"
        leftIcon={
          <IcDeleteBlack
            style={{ width: 24, height: 24 }}
            onClick={handleGoHospitalDetail}
          />
        }
      />
      {/* 중앙 컨텐츠 영역 */}
      <section className={styles.contentLayout}>
        {/* 4-1. 후기 작성 */}
        <ReviewContent />

        {/* 4-2. 사진 첨부 */}
        <ReviewImg
          setImageNames={setImageNames}
          setUploadedImageForms={setUploadedImageForms}
        />
        <span className={styles.docs}>
          서비스 운영 규정에 어긋나는 대가성 댓글은 사전 통보 없이 블라인드
          처리될 수 있습니다.
        </span>
      </section>

      {/* 하단 버튼 영역 */}
      <section className={styles.btnLayout}>
        <Button
          label="이전으로"
          size="large"
          variant="solidNeutral"
          onClick={onPrev}
        />
        <Button
          label="다음으로"
          size="large"
          variant="solidPrimary"
          onClick={handleNext}
        />
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
