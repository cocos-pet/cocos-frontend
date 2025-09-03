import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SimpleBottomSheet from "./SimpleBottomSheet";

const meta: Meta<typeof SimpleBottomSheet> = {
  title: "Design System/SimpleBottomSheet",
  component: SimpleBottomSheet,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
    content: {
      control: { type: "text" },
    },
    subContent: {
      control: { type: "text" },
    },
    leftText: {
      control: { type: "text" },
    },
    rightText: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Always Open Example for easier viewing
export const AlwaysOpen: Story = {
  args: {
    isOpen: true,
    content: "정말 삭제하시겠습니까?",
    subContent: "삭제된 내용은 복구할 수 없습니다.",
    leftText: "취소",
    rightText: "삭제",
    handleClose: () => console.log("Close clicked"),
    leftOnClick: () => console.log("Cancel clicked"),
    rightOnClick: () => console.log("Delete clicked"),
  },
};

// Interactive Example
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
        BottomSheet 열기
      </button>

      <SimpleBottomSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        content="계정을 삭제하시겠습니까?"
        subContent="모든 데이터가 영구적으로 삭제됩니다."
        leftText="취소"
        rightText="삭제"
        leftOnClick={() => {
          console.log("취소 클릭");
          setIsOpen(false);
        }}
        rightOnClick={() => {
          console.log("삭제 확인");
          setIsOpen(false);
        }}
      />
    </div>
  );
};

// Confirmation Example
export const ConfirmationSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        삭제 확인
      </button>

      <SimpleBottomSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        content="게시글을 삭제하시겠습니까?"
        leftText="취소"
        rightText="삭제"
        leftOnClick={() => setIsOpen(false)}
        rightOnClick={() => {
          alert("게시글이 삭제되었습니다");
          setIsOpen(false);
        }}
      />
    </div>
  );
};

// Save Changes Example
export const SaveChangesSheet = () => {
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
        변경사항 저장
      </button>

      <SimpleBottomSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        content="변경사항을 저장하시겠습니까?"
        subContent="저장하지 않으면 변경사항이 손실됩니다."
        leftText="저장 안함"
        rightText="저장"
        leftOnClick={() => setIsOpen(false)}
        rightOnClick={() => {
          alert("변경사항이 저장되었습니다");
          setIsOpen(false);
        }}
      />
    </div>
  );
};

// Logout Example
export const LogoutSheet = () => {
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
        로그아웃
      </button>

      <SimpleBottomSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        content="로그아웃 하시겠습니까?"
        leftText="취소"
        rightText="로그아웃"
        leftOnClick={() => setIsOpen(false)}
        rightOnClick={() => {
          alert("로그아웃 되었습니다");
          setIsOpen(false);
        }}
      />
    </div>
  );
};
