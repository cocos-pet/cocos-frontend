import type { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Design System/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["blue", "gray", "red", "border"],
    },
    icon: {
      control: { type: "boolean" },
    },
    isSelected: {
      control: { type: "boolean" },
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

export const Default: Story = {
  args: {
    label: "Chip",
    color: "blue",
    icon: false,
    isSelected: false,
    disabled: false,
  },
};

export const Blue: Story = {
  args: {
    label: "Blue Chip",
    color: "blue",
  },
};

export const Gray: Story = {
  args: {
    label: "Gray Chip",
    color: "gray",
  },
};

export const Red: Story = {
  args: {
    label: "Red Chip",
    color: "red",
  },
};

export const Border: Story = {
  args: {
    label: "Border Chip",
    color: "border",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Chip with Icon",
    color: "blue",
    icon: true,
  },
};

export const Selected: Story = {
  args: {
    label: "Selected Chip",
    color: "blue",
    isSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Chip",
    color: "blue",
    disabled: true,
  },
};
