import { style } from "@vanilla-extract/css";
import { color, font, semanticColor } from "@style/styles.css.ts";
import { recipe } from "@vanilla-extract/recipes";
export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.2rem",
});

export const tabContainer = style({
  display: "flex",
  padding: "1rem 0",
  justifyContent: "space-between",
  position: "sticky",
  backgroundColor: "#fff",
  top: "6.4rem",
  width: "100%",
  zIndex: 10,
});

export const postList = style({
  width: "100%",
  padding: "1.6rem 2rem 0rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

// 탭 버튼 스타일
export const tabButton = recipe({
  base: {
    flex: 1,
    cursor: "pointer",
    position: "relative",
    fontFamily: font.body01,
    fontSize: "1.4rem",
    color: color.gray.gray500,
    padding: "0.5rem 0",
  },
  variants: {
    isActive: {
      true: {
        color: color.gray.gray900,
        fontWeight: "bold",
      },
      false: {
        color: color.gray.gray500,
        fontWeight: "normal",
      },
    },
  },
});

export const info = style([
  font.label01,
  {
    fontWeight: "500",
    color: semanticColor.text.assistive,
  },
]);

// 게시글 아이템 스타일
export const postItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 0",
  borderBottom: `1px solid ${color.gray.gray300}`,
  gap: "1rem",
});

// 게시글 텍스트 스타일
export const postText = style([
  {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "25.3rem",
  },
  font.body01,
  {
    color: semanticColor.text.assistive,
  },
]);

// 게시글 제목 스타일
export const postTitle = style([
  {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "25.3rem",
  },
  font.heading02,
  {
    color: semanticColor.text.normal,
    fontWeight: "600",
    margin: "0.5rem 0",
  },
]);

export const postContent = style([
  {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "25.3rem",
  },
  font.body01,
  {
    color: semanticColor.text.assistive,
    fontWeight: "500",
  },
]);

// 게시글 메타정보 스타일
export const postMeta = style([
  font.label01,
  {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    color: semanticColor.text.assistive,
    fontWeight: "500",
    marginTop: "0.5rem",
  },
]);

// 게시글 이미지 스타일
export const postImage = style({
  width: "6rem",
  height: "6rem",
  backgroundColor: color.gray.gray200,
  borderRadius: "8px",
});

export const underline = style({
  position: "absolute",
  bottom: "-1.2rem",
  left: "50%",
  transform: "translateX(-50%)",
  width: "2.4rem",
});
