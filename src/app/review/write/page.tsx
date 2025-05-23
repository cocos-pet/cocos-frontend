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

export const defaultValues: ReviewFormData = {
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

type FunnelStep = "Step1" | "Step2" | "Step3" | "Step4";
interface FunnelState {
  step: FunnelStep;
  context: Record<string, unknown>;
}

export default function Page() {
  const funnel = useReviewFunnel() as unknown as {
    history: FunnelState[];
    currentIndex: number;
    push: (state: FunnelState) => void;
    pop: () => void;
    replace: (state: FunnelState) => void;
    go: (delta: number) => void;
    cleanup: () => void;
  };

  const historyArray = funnel.history as unknown as FunnelState[];
  const current = historyArray[funnel.currentIndex];
  const step = current.step;

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
