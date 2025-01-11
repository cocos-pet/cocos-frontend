import { style } from "@vanilla-extract/css";
import { font, color } from "@style/index";

// 텍스트 스타일
export const tttt = style([
  font.body01,
  {
    color: color.gray.gray000, // 텍스트 색상
    textAlign: "center", // 텍스트 가운데 정렬
  },
]);

// 메인 컨테이너 스타일
export const mainContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // 컨테이너 내부 중앙 정렬
  alignItems: "center", // 수평 방향 중앙 정렬
  gap: "2rem",

  width: 430,
  height: 675,

  borderRadius: "24px",
  backgroundColor: color.gray.gray900,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
