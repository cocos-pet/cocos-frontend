import { createContext, useContext } from "react";

export interface ContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalContext = createContext<ContextValue>({
  open: false,
  setOpen: () => {},
});

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal 컴포넌트는 ModalProvider 내에서 사용되어야 합니다.");
  }
  return context;
}
