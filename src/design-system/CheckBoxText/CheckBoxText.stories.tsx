import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CheckBoxText from "./CheckBoxText";

const meta: Meta<typeof CheckBoxText> = {
  title: "Design System/CheckBoxText",
  component: CheckBoxText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
    },
    isSelected: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "체크박스 텍스트",
    isSelected: false,
    onClick: () => console.log("Checkbox clicked!"),
  },
};

export const Selected: Story = {
  args: {
    children: "선택된 체크박스",
    isSelected: true,
    onClick: () => console.log("Checkbox clicked!"),
  },
};

// Interactive Checkbox Example
export const InteractiveCheckbox = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <CheckBoxText
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    >
      클릭해서 상태를 변경해보세요
    </CheckBoxText>
  );
};

// Multiple Checkboxes Example
export const MultipleCheckboxes = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const items = ["옵션 1", "옵션 2", "옵션 3", "옵션 4"];

  const handleToggle = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h3>여러 체크박스 예제</h3>
      {items.map((item) => (
        <CheckBoxText
          key={item}
          isSelected={selectedItems.includes(item)}
          onClick={() => handleToggle(item)}
        >
          {item}
        </CheckBoxText>
      ))}
      <p>선택된 항목: {selectedItems.join(", ") || "없음"}</p>
    </div>
  );
};
