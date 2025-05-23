"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useFunnel } from "@use-funnel/browser";
import { useRouter } from "next/navigation";
import { PATH } from "@route/path";

import Step1 from "@app/review/write/_section/Step1";
import Step2 from "@app/review/write/_section/Step2";
import Step3 from "@app/review/write/_section/Step3";
import Step4 from "@app/review/write/_section/Step4";

export interface ReviewFormData {
  hospital: string;
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

type StepContextMap = {
  Step1: Record<string, never>;
  Step2: Record<string, never>;
  Step3: Record<string, never>;
  Step4: Record<string, never>;
};

export default function Page() {
  const { step, history } = useFunnel<StepContextMap>({
    id: "review-flow",
    initial: { step: "Step1", context: {} },
  });

  const router = useRouter();

  const methods = useForm<ReviewFormData>({
    defaultValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      {step === "Step1" && <Step1 onNext={() => history.push("Step2")} />}
      {step === "Step2" && <Step2 onNext={() => history.push("Step3")} />}
      {step === "Step3" && <Step3 onNext={() => history.push("Step4")} />}
      {step === "Step4" && <Step4 onNext={() => router.push(PATH.REVIEW.COMPLETE)} />}
    </FormProvider>
  );
}
