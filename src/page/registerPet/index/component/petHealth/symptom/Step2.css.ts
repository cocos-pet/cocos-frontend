import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const title = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
  padding: "7.2rem 2rem 7rem",
});

export const contentLayout = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
  overflowY: "auto",
  overflowX: "hidden",
  padding: "0 2rem",
  //   height: "calc(100vh - 11.8rem)",
});

export const chipLayout = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.2rem 0.4rem",
  width: "33.5rem",
});

export const selectedBody = style([
  font.heading01,
  {
    color: color.primary.blue700,
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
  },
]);

export const btnWrapper = style({
  maxWidth: "76.8rem",
  width: "100%",
  position: "fixed",
  bottom: 0,
  display: "grid",
  gridTemplateColumns: "9.6rem calc(100% - 10.8rem)",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
  backgroundColor: color.gray.gray000,
});
