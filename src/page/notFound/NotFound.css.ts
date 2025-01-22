import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const notFoundContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  minHeight: "66.7rem",
  paddingBottom: "3.8rem",
});

export const notFoundeWrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.8rem",
});

export const notFoundImage = style({
  display: "flex",
  width: "29.3rem",
  height: "16.9rem",
  justifyContent: "center",
  alignItems: "center",

  objectFit: "contain",
});

export const notFoundTextWrapper = style({
  display: "flex",
  width: "14.3rem",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8rem",

  whiteSpace: "nowrap",
});

export const nothingText = style([
  font.body01,
  {
    color: semanticColor.disable.text,
  },
]);

export const goHomeText = style([
  font.body01,
  {
    color: semanticColor.text.strong,
    textAlign: "center",
    textDecoration: "underline",
  },
]);
