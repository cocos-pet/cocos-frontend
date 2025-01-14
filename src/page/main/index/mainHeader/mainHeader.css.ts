import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  display: "flex",
  width: "37.5rem",
  height: "20rem",
  padding: "0rem 2rem",
  flexDirection: "row", 
  justifyContent: "space-between",
  alignItems: "center", 
  gap: "1.2rem",
  backgroundColor: semanticColor.primary.strong,
});

export const textContainer = style({
  width: "19.7rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.8rem",
});

export const headerText = style([
  font.heading02,
  {
    color: semanticColor.text.inverse,
    overflow: "hidden",
    letterSpacing: "-0.18rem",
  },
]);

export const textDetail = style([
  font.label01,
  {
    fontWeight: "500",
    color: semanticColor.text.inverse,
    letterSpacing: "-0.24rem",
  },
]);

export const img = style({
  width: "10.8945rem",
  height: "15.2409rem",
  flexShrink: "0",
  backgroundColor: "#D9D9D9",
  borderRadius: "12px",
});
