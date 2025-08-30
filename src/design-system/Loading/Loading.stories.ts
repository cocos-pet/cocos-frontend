import type { Meta, StoryObj } from "@storybook/react";
import Loading from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Design System/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    height: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    height: 10,
  },
};

export const Medium: Story = {
  args: {
    height: 20,
  },
};

export const Large: Story = {
  args: {
    height: 30,
  },
};
