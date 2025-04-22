import { color, font, semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const hotPostContainer = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: "3.2rem 2rem 3.2rem 2rem",
});

export const titleContainer = style({
  display: "flex",
  gap: "0.4rem",
  flexDirection: "column",
});

export const postlist = style({
  width: "100%",
  color: semanticColor.text.normal,
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const subTitle = style([
  font.label01,
  {
    color: semanticColor.text.normal,
    fontWeight: "500",
  },
]);

export const nickname = style([
  font.heading02,
  {
    fontWeight: "600",
    color: color.primary.blue700,
  },
]);

export const title = style([
  { marginBottom: "1.2rem" },
  font.heading02,
  {
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
  borderRadius: "16px",
  border: `0.1rem solid ${semanticColor.text.normal}`,
  borderColor: semanticColor.line.strong,
  width: "100%",
});

export const postContent = style({
  display: "flex",
  gap: "0.4rem",
  width: "calc(100% - 3.2em)",
  whiteSpace: "nowrap",
});

export const contentId = style([
  font.body01,
  {
    width: "1.6rem",
    gap: "1.2rem",
    color: semanticColor.primary.strong,
    textAlign: "center",
  },
]);

export const contentTitle = style([
  font.body01,
  {
    color: semanticColor.text.normal,
    flex: 1,
    width: "calc(100% - 3.2rem)",
  },
]);
