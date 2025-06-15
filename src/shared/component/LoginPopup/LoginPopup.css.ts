import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const loginPopupContainer = style({
  display: "flex",
  flexDirection: "row",
  padding: "1.2rem 2.8rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.6rem",

  width: "23rem",
  height: "4.4rem",

  position: "fixed",
  bottom: "9.6rem",
  left: "50%",
  transform: "translateX(-50%)",

  borderRadius: "0.8rem",
  background: semanticColor.primary.strong,
  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
});

export const loginPopupText = style([
  {
    color: semanticColor.text.inverse,
    whiteSpace: "nowrap",
  },
  font.body01,
]);
