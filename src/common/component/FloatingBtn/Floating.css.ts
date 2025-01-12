import { semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

// 공통
export const floatingBtnBase = style({
  width: "4.8rem",
  height: "4.8rem",
  borderRadius: "100rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

export const floatingBtnEnabled = style({
  backgroundColor: semanticColor.primary.heavy,
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
});

export const floatingBtnDisabled = style({
  backgroundColor: semanticColor.disable.fill,
  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
});
