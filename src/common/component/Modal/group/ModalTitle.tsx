import { ReactNode } from "react";
import { ModalTitleStyle } from "@common/component/Modal/style.css.ts";

export interface ModalTitleProps {
  children: ReactNode;
}

export const ModalTitle = (props: ModalTitleProps) => {
  const { children } = props;
  return <div className={ModalTitleStyle}>{children}</div>;
};
