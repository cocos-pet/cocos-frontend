import { createVar, style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const container = style({
  backgroundColor: "white",
  margin: "0 2rem",
  width: "calc(100% - 4rem)",
  borderRadius: "1.6rem",
  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
  fontSize: "1.4rem",
});

export const itemStyle = style([
  font.body01,
  {
    height: "5.6rem",
    padding: "0 2rem",
    display: "flex", // 아이템들을 가로로 나열
    alignItems: "center", // 세로 가운데 정렬
    gap: "1rem", // 아이콘과 텍스트 사이 간격
    cursor: "pointer", // 마우스 커서를 손가락 모양으로 변경
    transition: "background-color 0.2s", // 배경색 변경 시 부드럽게 변경
    ":hover": {
      backgroundColor: color.gray.gray100, // 마우스를 올렸을 때 배경색 변경
    },
  },
]);
