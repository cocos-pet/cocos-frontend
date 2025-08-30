import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Design System/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error"],
    },
    iconColor: {
      control: { type: "select" },
      options: ["black", "white"],
    },
    showDeleteIcon: {
      control: { type: "boolean" },
    },
    message: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "기본 토스트 메시지입니다.",
    variant: "default",
    iconColor: "black",
    showDeleteIcon: true,
  },
};

export const Error: Story = {
  args: {
    message: "에러가 발생했습니다.",
    variant: "error",
    iconColor: "white",
    showDeleteIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    message: "아이콘이 없는 토스트입니다.",
    variant: "default",
    iconColor: "black",
    showDeleteIcon: false,
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "이것은 아주 긴 토스트 메시지입니다. 여러 줄에 걸쳐서 표시될 수 있는 메시지를 테스트하기 위한 것입니다.",
    variant: "default",
    iconColor: "black",
    showDeleteIcon: true,
  },
};
