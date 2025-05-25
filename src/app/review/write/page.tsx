"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useReviewFunnel } from "@app/review/write/_hook/useReviewFunnel";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";

import Step1 from "@app/review/write/_section/Step1";
import Step2 from "@app/review/write/_section/Step2";
import Step3 from "@app/review/write/_section/Step3";
import Step4 from "@app/review/write/_section/Step4";

export interface ReviewFormData {
  visitedAt: string;
  symptomIds: number[] | null;
  diseaseId: number | null;
  purposeId: number;
  goodReviewIds: number[];
  badReviewIds: number[];
  content: string;
  images: string[];
  breedId: number;
  gender: string;
  weight: number;
}

export const defaultValues: ReviewFormData = {
  visitedAt: "",
  symptomIds: null,
  diseaseId: null,
  purposeId: -1,
  goodReviewIds: [],
  badReviewIds: [],
  content: "",
  images: [],
  breedId: -1,
  gender: "",
  weight: -1,
};

export default function Page() {
  const funnel = useReviewFunnel();
  const step = funnel.step;

  const router = useRouter();

  const methods = useForm<ReviewFormData>({
    defaultValues,
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
