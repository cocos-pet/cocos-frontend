import { useModalContext } from "@common/component/Modal/context.ts";
import { Button } from "@common/component/Button";

export interface ModalConfirmProps {
  onClick?: () => void;
  label?: string;
}

export const ModalConfirm = (props: ModalConfirmProps) => {
  const { onClick, label = "확인" } = props;
  const { setOpen } = useModalContext();
  const handleClick = () => {
    onClick?.();
    setOpen(false);
  };
  return <Button size={"large"} variant={"solidPrimary"} label={label} onClick={handleClick} />;
};

ModalConfirm.displayName = "ModalConfirm";
