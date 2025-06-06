import { useState } from "react";

export type FunnelStep = "Step1"|"Step2"|"Step3"|"Step4"

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
  // history: FunnelState[];
  // currentIndex: number;
  step: keyof FunnelSteps;
  push: (state: FunnelState) => void;
  pop: () => void;
  replace: (state: FunnelState) => void;
  go: (delta: number) => void;
  cleanup: () => void;
}

export const useReviewFunnel = () => {
  const [history, setHistory] = useState<FunnelState[]>([{ step: "Step1", context: {} }]);
  const [currentIndex, setIndex] = useState(0);

const current = history[currentIndex];
const step = current.step;

  return {
    step,
    push(state: FunnelState) {
      setHistory((prev) => {
        const next = prev.slice(0, currentIndex + 1);
        return [...next, state];
      });
      setIndex((i) => i + 1);
    },
    pop() {
      setIndex((i) => Math.max(0, i - 1));
    },
    replace(state: FunnelState) {
      setHistory((prev) => {
        const next = prev.slice(0, currentIndex);
        return [...next, state];
      });
    },
    go(delta: number) {
      setIndex((i) => i + delta);
    },
    cleanup: () => {},
  } satisfies CustomFunnel;
};
