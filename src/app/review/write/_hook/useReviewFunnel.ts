import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export type FunnelStep = "Step1" | "Step2" | "Step3" | "Step4";

type FunnelSteps = {
  Step1: Record<string, never>;
  Step2: Record<string, never>;
  Step3: Record<string, never>;
  Step4: Record<string, never>;
};

export type FunnelState = {
  step: keyof FunnelSteps;
  context: Record<string, unknown>;
};

interface CustomFunnel {
  step: keyof FunnelSteps;
  push: (state: FunnelState) => void;
  pop: () => void;
  replace: (state: FunnelState) => void;
  go: (delta: number) => void;
}

const stepToNumber = (step: FunnelStep): number => {
  switch (step) {
    case "Step1":
      return 1;
    case "Step2":
      return 2;
    case "Step3":
      return 3;
    case "Step4":
      return 4;
    default:
      return 1;
  }
};

const numberToStep = (num: number): FunnelStep => {
  switch (num) {
    case 1:
      return "Step1";
    case 2:
      return "Step2";
    case 3:
      return "Step3";
    case 4:
      return "Step4";
    default:
      return "Step1";
  }
};

export const useReviewFunnel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<FunnelStep>("Step1");

  // URL의 step 파라미터 확인 후 현재 단계 설정
  useEffect(() => {
    const stepParam = searchParams?.get("step");
    if (stepParam && ["1", "2", "3", "4"].includes(stepParam)) {
      setCurrentStep(numberToStep(Number.parseInt(stepParam, 10)));
    } else {
      // step 파라미터가 없으면 Step1으로 설정하고 URL에 추가
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("step", "1");
      router.replace(newUrl.pathname + newUrl.search, { scroll: false });
      setCurrentStep("Step1");
    }
  }, [searchParams, router]);

  // 브라우저 뒤로가기/앞으로가기
  useEffect(() => {
    const handlePopState = () => {
      // popstate 이벤트가 발생하면 URL의 step 파라미터를 다시 확인
      const urlParams = new URLSearchParams(window.location.search);
      const stepParam = urlParams.get("step");
      if (stepParam && ["1", "2", "3", "4"].includes(stepParam)) {
        setCurrentStep(numberToStep(Number.parseInt(stepParam, 10)));
      } else {
        setCurrentStep("Step1");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const step = currentStep;

  return {
    step,
    push(state: FunnelState) {
      const stepNumber = stepToNumber(state.step);
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("step", stepNumber.toString());

      router.push(newUrl.pathname + newUrl.search, { scroll: false });
      setCurrentStep(state.step);
    },
    pop() {
      const currentStepNumber = stepToNumber(currentStep);
      if (currentStepNumber > 1) {
        const prevStepNumber = currentStepNumber - 1;
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("step", prevStepNumber.toString());

        router.push(newUrl.pathname + newUrl.search, { scroll: false });
        setCurrentStep(numberToStep(prevStepNumber));
      }
    },
    replace(state: FunnelState) {
      const stepNumber = stepToNumber(state.step);
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("step", stepNumber.toString());

      router.replace(newUrl.pathname + newUrl.search, { scroll: false });
      setCurrentStep(state.step);
    },
    go(delta: number) {
      const currentStepNumber = stepToNumber(currentStep);
      const targetStepNumber = Math.max(1, Math.min(4, currentStepNumber + delta));

      if (targetStepNumber !== currentStepNumber) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("step", targetStepNumber.toString());

        router.push(newUrl.pathname + newUrl.search, { scroll: false });
        setCurrentStep(numberToStep(targetStepNumber));
      }
    },
  } satisfies CustomFunnel;
};
