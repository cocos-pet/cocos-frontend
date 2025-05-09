"use client";

import { FormProvider, useForm } from "react-hook-form";

// import Step1 from "@app/review/write/_section/Step1";
import Step2 from "@app/review/write/_section/Step2";

// 제출할 리뷰 데이터
export interface ReviewFormData {
  hospital: string; // ⚠️ 이거 필요없음 다른 pr 머지되면 수정 예정
  date: string; // ⚠️ 키 visitedAt으로 바꿔야함
  symptomIds: number[];
  diseaseId: number;
  purposeId: number;
  // breedId:number;
  // gender: string;
  // weight: number;
  // visitedAt: string
  // content: string;
  // diseaseId: number;
  // goodReviewIds: number[];
  // badReviewIds: number[];
  // images: string[];
}

const defaultValues: ReviewFormData = {
  hospital: "",
  date: "",
  symptomIds: [],
  diseaseId: -1,
  purposeId: -1,
};

const page = () => {
  const methods = useForm<ReviewFormData>({
    defaultValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      {/* <Step1 /> */}
      <Step2 />
    </FormProvider>
  );
};
export default page;
