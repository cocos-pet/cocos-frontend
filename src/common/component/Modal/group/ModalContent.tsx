import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { ModalBodyStyle, ModalContentStyle } from "@common/component/Modal/style.css.ts";
import { useModalContext } from "@common/component/Modal/context.ts";

export interface ModalContentProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  children?: ReactNode;
  bottomAffix?: ReactNode;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>((props, forwardedRef) => {
  const { title, children, bottomAffix, onClick, ...rest } = props;
  const { open } = useModalContext();
  if (!open) return null;

  return (
    <div className={ModalBodyStyle} ref={forwardedRef} {...rest}>
      {title}
      <div className={ModalContentStyle}>{children}</div>
      {bottomAffix}
    </div>
  );
});

ModalContent.displayName = "ModalContent";
