"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useReviewFunnel } from "@app/review/write/_hook/useReviewFunnel";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";

import Step1, { PetInfoType } from "@app/review/write/_section/Step1/Step1";
import Step2 from "@app/review/write/_section/Step2/Step2";
import Step3 from "@app/review/write/_section/Step3/Step3";
import Step4 from "@app/review/write/_section/Step4/Step4";
import { Hospital } from "@shared/component/SearchHospital/SearchHospital";

// UI 상태 분리
export interface ReviewExtraData {
  selectedHospital: Hospital | null;
  selectedPetInfoType: PetInfoType | null;
  petType: string;
}

// 제출 대상 필드
export interface ReviewFormData {
  visitedAt: string;
  symptomIds?: number[];
  diseaseId?: number;
  purposeId: number;
  goodReviewIds: number[];
  badReviewIds: number[];
  content: string;
  images: string[];
  breedId: number;
  gender: "F" | "M" | null;
  weight: number;
}

export type ReviewFormWithUIData = ReviewFormData & ReviewExtraData;

export const defaultValues: ReviewFormData = {
  visitedAt: "",
  symptomIds: undefined,
  diseaseId: undefined,
  purposeId: -1,
  goodReviewIds: [],
  badReviewIds: [],
  content: "",
  images: [],
  breedId: -1,
  gender: null,
  weight: -1,
};

export default function Page() {
  const funnel = useReviewFunnel();
  const step = funnel.step;

  const router = useRouter();

  const methods = useForm<ReviewFormWithUIData>({
    defaultValues: {
      ...defaultValues,
      selectedHospital: null,
      selectedPetInfoType: null,
      petType: "",
    },
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      {step === "Step1" && <Step1 onNext={() => funnel.push({ step: "Step2", context: {} })} />}
      {step === "Step2" && (
        <Step2 onPrev={() => funnel.pop()} onNext={() => funnel.push({ step: "Step3", context: {} })} />
      )}
      {step === "Step3" && (
        <Step3 onPrev={() => funnel.pop()} onNext={() => funnel.push({ step: "Step4", context: {} })} />
      )}
      {step === "Step4" && <Step4 onPrev={() => funnel.pop()} onNext={() => router.push(PATH.REVIEW.COMPLETE)} />}
    </FormProvider>
  );
}
