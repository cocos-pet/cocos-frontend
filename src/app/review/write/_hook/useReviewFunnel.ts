import { useState } from "react";

type FunnelSteps = {
  Step1: Record<string, never>;
  Step2: Record<string, never>;
  Step3: Record<string, never>;
  Step4: Record<string, never>;
};

type FunnelState = {
  step: keyof FunnelSteps;
  context: Record<string, unknown>;
};

interface CustomFunnel {
  history: FunnelState[];
  currentIndex: number;
  push: (state: FunnelState) => void;
  pop: () => void;
  replace: (state: FunnelState) => void;
  go: (delta: number) => void;
  cleanup: () => void;
}

export const useReviewFunnel = () => {
  const [history, setHistory] = useState<FunnelState[]>([{ step: "Step1", context: {} }]);
  const [currentIndex, setIndex] = useState(0);

  return {
    history,
    currentIndex,
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
