import { color, font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const footerContainer = style({
  display: "flex",
  width: "100%",
  padding: "1.9rem 3.2rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1.2rem",
  backgroundColor: color.gray.gray100,
});

export const footerName = style([
  font.heading01,
  {
    letterSpacing: "-0.06rem",
    color: semanticColor.text.strong,
  },
]);

export const footerDetail = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
    letterSpacing: "-0.024rem",
    fontWeight: "600",
    textDecoration: "none",
  },
]);
