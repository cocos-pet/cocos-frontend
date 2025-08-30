import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ColorChip from "./ColorChip";

const meta: Meta<typeof ColorChip> = {
  title: "Design System/ColorChip",
  component: ColorChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["blue", "yellow"],
    },
    selected: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BlueDefault: Story = {
  args: {
    label: "Blue Chip",
    type: "blue",
    selected: false,
    onClick: () => console.log("Blue chip clicked!"),
  },
};

export const BlueSelected: Story = {
  args: {
    label: "Blue Chip Selected",
    type: "blue",
    selected: true,
    onClick: () => console.log("Blue chip clicked!"),
  },
};

export const YellowDefault: Story = {
  args: {
    label: "Yellow Chip",
    type: "yellow",
    selected: false,
    onClick: () => console.log("Yellow chip clicked!"),
  },
};

export const YellowSelected: Story = {
  args: {
    label: "Yellow Chip Selected",
    type: "yellow",
    selected: true,
    onClick: () => console.log("Yellow chip clicked!"),
  },
};

// Interactive ColorChip Example
export const InteractiveColorChips = () => {
  const [selectedBlue, setSelectedBlue] = useState(false);
  const [selectedYellow, setSelectedYellow] = useState(false);

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <h3>인터랙티브 ColorChip 예제</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <ColorChip
          label="Blue Chip"
          type="blue"
          selected={selectedBlue}
          onClick={() => setSelectedBlue(!selectedBlue)}
        />
        <ColorChip
          label="Yellow Chip"
          type="yellow"
          selected={selectedYellow}
          onClick={() => setSelectedYellow(!selectedYellow)}
        />
      </div>
      <p>Blue 선택됨: {selectedBlue ? "Yes" : "No"}</p>
      <p>Yellow 선택됨: {selectedYellow ? "Yes" : "No"}</p>
    </div>
  );
};
