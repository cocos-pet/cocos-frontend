import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Tab from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "Design System/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "mobile",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["good", "bad"],
    },
    active: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GoodDefault: Story = {
  args: {
    children: "Good Tab",
    variant: "good",
    active: false,
    onClick: () => console.log("Tab clicked!"),
  },
};

export const GoodActive: Story = {
  args: {
    children: "Active Good Tab",
    variant: "good",
    active: true,
    onClick: () => console.log("Tab clicked!"),
  },
};

export const BadDefault: Story = {
  args: {
    children: "Bad Tab",
    variant: "bad",
    active: false,
    onClick: () => console.log("Tab clicked!"),
  },
};

export const BadActive: Story = {
  args: {
    children: "Active Bad Tab",
    variant: "bad",
    active: true,
    onClick: () => console.log("Tab clicked!"),
  },
};

export const CustomWidth: Story = {
  args: {
    children: "Custom Width Tab",
    variant: "good",
    active: false,
    width: "200px",
    onClick: () => console.log("Tab clicked!"),
  },
};

// Interactive Tab Group Example
export const TabGroup = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "좋은 리뷰", variant: "good" as const },
    { label: "나쁜 리뷰", variant: "bad" as const },
    { label: "전체", variant: "good" as const },
  ];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          variant={tab.variant}
          active={activeTab === index}
          onClick={() => setActiveTab(index)}
          width="100px"
        >
          {tab.label}
        </Tab>
      ))}
    </div>
  );
};
