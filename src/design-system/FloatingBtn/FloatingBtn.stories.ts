import type { Meta, StoryObj } from "@storybook/react";
import FloatingBtn from "./Floating";

const meta: Meta<typeof FloatingBtn> = {
  title: "Design System/FloatingBtn",
  component: FloatingBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    onClick: () => console.log("Floating button clicked!"),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onClick: () => console.log("This should not be called"),
  },
};

export const WithAction: Story = {
  args: {
    disabled: false,
    onClick: () => alert("새 항목을 추가하시겠습니까?"),
  },
};
