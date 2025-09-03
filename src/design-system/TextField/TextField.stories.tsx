import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextField } from "./index";

const meta: Meta<typeof TextField> = {
  title: "Design System/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "mobile",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: { type: "select" },
      options: ["default", "error"],
    },
    active: {
      control: { type: "boolean" },
    },
    isDelete: {
      control: { type: "boolean" },
    },
    readOnly: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    maxLength: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "검색어를 입력해주세요",
    state: "default",
    active: true,
    isDelete: true,
    onChange: (e) => console.log("Input changed:", e.target.value),
    onClearClick: () => console.log("Clear clicked"),
  },
};

export const WithValue: Story = {
  args: {
    value: "입력된 텍스트",
    placeholder: "검색어를 입력해주세요",
    state: "default",
    active: true,
    isDelete: true,
    onChange: (e) => console.log("Input changed:", e.target.value),
    onClearClick: () => console.log("Clear clicked"),
  },
};

export const ErrorState: Story = {
  args: {
    value: "에러 상태",
    placeholder: "검색어를 입력해주세요",
    state: "error",
    active: true,
    isDelete: true,
    onChange: (e) => console.log("Input changed:", e.target.value),
    onClearClick: () => console.log("Clear clicked"),
  },
};

export const Disabled: Story = {
  args: {
    value: "비활성화된 입력",
    placeholder: "검색어를 입력해주세요",
    state: "default",
    active: false,
    isDelete: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: "읽기 전용 텍스트",
    placeholder: "검색어를 입력해주세요",
    state: "default",
    active: true,
    readOnly: true,
    isDelete: false,
  },
};

// Interactive TextField Example
export const Interactive = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      value={value}
      placeholder="인터랙티브 텍스트 필드"
      onChange={(e) => setValue(e.target.value)}
      onClearClick={() => setValue("")}
      state="default"
      active={true}
      isDelete={true}
    />
  );
};
