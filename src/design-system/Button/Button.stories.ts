import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["solidPrimary", "solidNeutral", "outlinePrimary"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "solidPrimary",
    label: "Button",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    variant: "solidNeutral",
    label: "Button",
    size: "medium",
  },
};

export const Outline: Story = {
  args: {
    variant: "outlinePrimary",
    label: "Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    variant: "solidPrimary",
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    variant: "solidPrimary",
    size: "small",
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "solidPrimary",
    label: "Button",
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "solidPrimary",
    label: "Button with Icon",
    leftIcon: "🔥",
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "solidPrimary",
    label: "Button with Icon",
    rightIcon: "→",
  },
};
