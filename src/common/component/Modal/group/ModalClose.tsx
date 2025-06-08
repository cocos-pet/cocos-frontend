import { useModalContext } from "@common/component/Modal/context.ts";
import { Button } from "@common/component/Button";

export interface ModalCloseProps {
  label?: string;
}

export const ModalClose = (props: ModalCloseProps) => {
  const { label = "취소" } = props;
  const { setOpen } = useModalContext();
  return <Button size={"large"} variant={"solidNeutral"} label={label} onClick={() => setOpen(false)} />;
};

ModalClose.displayName = "ModalClose";
