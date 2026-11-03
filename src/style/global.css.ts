import "./reset.css";
import { globalStyle } from "@vanilla-extract/css";
import { color } from "./styles.css.ts";
import { contentMaxWidth, media } from "./breakpoints";

export const sizeOfRem = 10;

globalStyle("html", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  touchAction: "manipulation",
  WebkitTouchCallout: "none",
  WebkitUserSelect: "none",

  // 375px 밖 여백(레터박스) 영역 — 순수 흰색 대신 눈이 편한 연한 색
  backgroundColor: "#FBFBFB",

  fontSize: `${sizeOfRem}px`, //default

  "@media": {
    "(min-width: 450px) and (max-width: 600px)": { fontSize: `${sizeOfRem}px` },
    "(max-width: 450px)": { fontSize: `${sizeOfRem}px` }, //62.5%
  },
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  minWidth: "320px",
  maxWidth: contentMaxWidth.mobile,
  minHeight: "calc(var(--vh, 1vh) * 100)",
  fontFamily: "Pretendard, sans-serif",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  backgroundColor: color.gray.gray000,
  "@media": {
    [media.tablet]: { maxWidth: contentMaxWidth.tablet },
    [media.laptop]: { maxWidth: contentMaxWidth.laptop },
  },
});
