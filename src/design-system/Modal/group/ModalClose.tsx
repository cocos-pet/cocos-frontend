import { useModalContext } from "../context.ts";
import { Button } from "../../Button";

export interface ModalCloseProps {
  label?: string;
}

export const ModalClose = (props: ModalCloseProps) => {
  const { label = "취소" } = props;
  const { setOpen } = useModalContext();
  return (
    <Button
      size={"large"}
      variant={"solidNeutral"}
      label={label}
      onClick={() => setOpen(false)}
    />
  );
};

ModalClose.displayName = "ModalClose";
