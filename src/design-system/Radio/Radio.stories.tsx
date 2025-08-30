import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Design System/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number" },
    },
    checked: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
    checked: false,
    onChange: (value: number) => console.log("Selected value:", value),
  },
};

export const Checked: Story = {
  args: {
    value: 1,
    checked: true,
    onChange: (value: number) => console.log("Selected value:", value),
  },
};

// Interactive Radio Group Example
export const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState<number>(1);

  const options = [
    { value: 1, label: "옵션 1" },
    { value: 2, label: "옵션 2" },
    { value: 3, label: "옵션 3" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h3>라디오 그룹 예제</h3>
      {options.map((option) => (
        <label
          key={option.value}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Radio
            value={option.value}
            checked={selectedValue === option.value}
            onChange={setSelectedValue}
          />
          {option.label}
        </label>
      ))}
      <p>선택된 값: {selectedValue}</p>
    </div>
  );
};
