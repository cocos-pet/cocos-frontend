import type { Meta, StoryObj } from "@storybook/react";
import HeaderNav from "./HeaderNav";

const meta: Meta<typeof HeaderNav> = {
  title: "Design System/HeaderNav",
  component: HeaderNav,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["field", "noTitle", "noBackground"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTitle: Story = {
  args: {
    leftIcon: "←",
    centerContent: "페이지 제목",
    rightBtn: "완료",
    onLeftClick: () => console.log("Left clicked!"),
    onRightClick: () => console.log("Right clicked!"),
  },
};

export const FieldType: Story = {
  args: {
    type: "field",
    leftIcon: "←",
    centerContent: "검색어를 입력하세요",
    onLeftClick: () => console.log("Left clicked!"),
  },
};

export const NoTitle: Story = {
  args: {
    type: "noTitle",
    leftIcon: "←",
    rightBtn: "저장",
    onLeftClick: () => console.log("Left clicked!"),
    onRightClick: () => console.log("Right clicked!"),
  },
};

export const NoBackground: Story = {
  args: {
    type: "noBackground",
    leftIcon: "←",
    centerContent: "투명 배경",
    rightBtn: "설정",
    onLeftClick: () => console.log("Left clicked!"),
    onRightClick: () => console.log("Right clicked!"),
  },
};

export const IconOnly: Story = {
  args: {
    leftIcon: "🏠",
    centerContent: "홈",
    rightBtn: "⚙️",
    onLeftClick: () => console.log("Home clicked!"),
    onRightClick: () => console.log("Settings clicked!"),
  },
};

export const TextOnly: Story = {
  args: {
    leftIcon: "취소",
    centerContent: "새 게시물",
    rightBtn: "완료",
    onLeftClick: () => console.log("Cancel clicked!"),
    onRightClick: () => console.log("Done clicked!"),
  },
};

// Examples with common use cases
export const BackButton: Story = {
  args: {
    leftIcon: "←",
    centerContent: "상세보기",
    onLeftClick: () => console.log("Go back!"),
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "200px" }}>
        <Story />
        <div style={{ padding: "20px" }}>
          <p>뒤로가기 버튼이 있는 헤더 예제</p>
        </div>
      </div>
    ),
  ],
};

export const SearchHeader: Story = {
  args: {
    type: "field",
    leftIcon: "🔍",
    centerContent: "병원, 증상을 검색해보세요",
    onLeftClick: () => console.log("Search focused!"),
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "200px" }}>
        <Story />
        <div style={{ padding: "20px" }}>
          <p>검색 필드가 있는 헤더 예제</p>
        </div>
      </div>
    ),
  ],
};
