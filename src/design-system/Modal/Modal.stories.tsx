import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal.Root> = {
  title: "Design System/Modal",
  component: Modal.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

// Basic Modal Example
export const BasicModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Content
          title={<Modal.Title>기본 모달</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label="취소" />
              <Modal.Confirm label="확인" onClick={() => setIsOpen(false)} />
            </Modal.BottomAffix>
          }
        >
          이것은 기본 모달의 내용입니다.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

// Login Required Modal Example
export const LoginRequiredModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>로그인 모달 열기</button>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Content
          title={<Modal.Title>로그인이 필요해요.</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label="취소" />
              <Modal.Confirm
                label="로그인"
                onClick={() => {
                  console.log("로그인 버튼 클릭");
                  setIsOpen(false);
                }}
              />
            </Modal.BottomAffix>
          }
        >
          코코스를 더 잘 즐기기 위해 로그인을 해주세요.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

// Confirmation Modal Example
export const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>확인 모달 열기</button>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Content
          title={<Modal.Title>정말 삭제하시겠습니까?</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label="취소" />
              <Modal.Confirm
                label="삭제"
                onClick={() => {
                  console.log("삭제 확인");
                  setIsOpen(false);
                }}
              />
            </Modal.BottomAffix>
          }
        >
          이 작업은 되돌릴 수 없습니다.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

// Simple Modal (Without Bottom Buttons)
export const SimpleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>단순 모달 열기</button>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Content title={<Modal.Title>알림</Modal.Title>}>
          이것은 버튼이 없는 단순한 모달입니다. 배경을 클릭하면 닫힙니다.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};
