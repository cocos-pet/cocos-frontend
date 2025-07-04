import { ReactNode } from "react";
import { ModalBottomStyle } from "@common/component/Modal/style.css.ts";

export interface ModalBottomProps {
  children: ReactNode;
}

export const ModalBottomAffix = (props: ModalBottomProps) => {
  const { children } = props;
  return <div className={ModalBottomStyle}>{children}</div>;
};
