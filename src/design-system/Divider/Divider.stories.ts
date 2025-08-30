import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Design System/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["large", "small", "popular"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Popular: Story = {
  args: {
    size: "popular",
  },
};
