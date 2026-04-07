import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const title = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
  padding: "8rem 2rem 3.2rem",
});

export const bodyNameHighlight = style({
  color: color.primary.blue700,
});

export const contentLayout = style({
  position: "fixed",
  top: "18.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
  overflowY: "auto",
  padding: "3.2rem 2rem 6rem 2rem",
  height: "calc(100vh - 30rem)",
});

export const chipLayout = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.2rem 0.4rem",
  maxWidth: "76.8rem",
});

export const section = style([
  font.heading01,
  {
    color: color.primary.blue700,
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
  },
]);

export const sectionTitle = style({
  color: color.gray.gray900,
});
