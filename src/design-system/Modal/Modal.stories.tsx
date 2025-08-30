import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal.Root> = {
  title: "Design System/Modal",
  component: Modal.Root,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

// Always Open Modal for easier viewing
export const AlwaysOpen = () => {
  return (
    <div style={{ padding: "20px" }}>
      <p>Modal이 항상 열려있는 상태입니다.</p>
      <Modal.Root open={true}>
        <Modal.Content
          title={<Modal.Title>항상 열린 모달</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label="취소" />
              <Modal.Confirm
                label="확인"
                onClick={() => console.log("확인 클릭")}
              />
            </Modal.BottomAffix>
          }
        >
          이 모달은 항상 열려있어서 스타일을 확인하기 좋습니다.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

// Interactive Modal
export const Interactive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        모달 열기
      </button>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Content
          title={<Modal.Title>인터랙티브 모달</Modal.Title>}
          bottomAffix={
            <Modal.BottomAffix>
              <Modal.Close label="취소" />
              <Modal.Confirm
                label="확인"
                onClick={() => {
                  console.log("확인 버튼 클릭");
                  setIsOpen(false);
                }}
              />
            </Modal.BottomAffix>
          }
        >
          이 모달은 버튼을 클릭해서 열고 닫을 수 있습니다.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};

// Login Modal Example
export const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        로그인 모달 열기
      </button>

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

// Simple Modal without buttons
export const SimpleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ffc107",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        단순 모달 열기
      </button>

      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Content title={<Modal.Title>알림</Modal.Title>}>
          이것은 버튼이 없는 단순한 모달입니다. 배경을 클릭하면 닫힙니다.
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};
