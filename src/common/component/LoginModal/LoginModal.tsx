import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "../Modal/Modal";
import { PATH } from "@route/path";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LoginModal = (props: LoginModalProps) => {
  const router = useRouter();
  const { isOpen, setIsOpen } = props;

  const handleConfirm = () => {
    router.push(PATH.LOGIN);
  };

  return (
    <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
      <Modal.Content
        title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
        bottomAffix={
          <Modal.BottomAffix>
            <Modal.Close label={"취소"} />
            <Modal.Confirm label={"로그인"} onClick={handleConfirm} />
          </Modal.BottomAffix>
        }
      >
        코코스를 더 잘 즐기기 위해 로그인을 해주세요.
      </Modal.Content>
    </Modal.Root>
  );
};

export default LoginModal;
