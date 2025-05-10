"use client";

import Step1 from "@app/review/write/_section/Step1";
import { FormProvider, useForm } from "react-hook-form";

// 제출할 리뷰 데이터
export interface ReviewFormData {
  hospital: string; // ⚠️ 이거 필요없음 다른 pr 머지되면 수정 예정
  visitedAt: string;
  symptomIds: number[];
  diseaseId: number;
  purposeId: number;
  goodReviewIds: number[];
  badReviewIds: number[];
  content: string;
  images: string[];

  breedId: number;
  gender: string;
  weight: number;
}

const defaultValues: ReviewFormData = {
  hospital: "",
  visitedAt: "",
  symptomIds: [],
  diseaseId: -1,
  purposeId: -1,
  goodReviewIds: [],
  badReviewIds: [],
  content: "",
  images: [],

  breedId: -1,
  gender: "",
  weight: -1,
};

const page = () => {
  const methods = useForm<ReviewFormData>({
    defaultValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <Step1 />
    </FormProvider>
  );
};
export default page;
