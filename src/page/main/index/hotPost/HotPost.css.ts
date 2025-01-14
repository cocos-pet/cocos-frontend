import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const hotPostContainer = style({
  display: "flex",
  width: "37.5rem",
  flexDirection: "column",
  padding: "2rem",
});

export const p = style([
  font.label01,
  {
    color: semanticColor.text.normal,
    fontWeight: "500",
    letterSpacing: "-0.24rem",
  },
]);

export const title = style([
  font.heading02,
  {
    letterSpacing: "-0.18rem",
    color: semanticColor.text.normal,
  },
]);

export const hotPostListContainer = style({
  display: "flex",
  padding: "1.6rem",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  gap: "1.2rem",
  borderColor: semanticColor.primary.strong,
  borderRadius: "16px",
});

export const postContent = style({
  display: "flex",
});

export const contentId = style([
  font.body01,
  {
    color: semanticColor.primary.strong,
  },
]);

export const contentTitle = style([
  font.body01,
  {
    letterSpacing: "-0.28rem",
    color: semanticColor.text.normal,
  },
]);
