import { font, color } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tabContainer = style({
  display: "flex",
  width: "37.5rem",
  padding: "1rem 0",
  justifyContent: "space-between",
  position: "sticky",
  backgroundColor: "#fff",
  top: "6.4rem",
  zIndex: 10,
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
  export const underline = style({
    position: "absolute",
    bottom: "-1.2rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "2.4rem",
  });