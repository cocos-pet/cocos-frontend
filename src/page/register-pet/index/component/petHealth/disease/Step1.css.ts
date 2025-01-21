import { style } from "@vanilla-extract/css";
import { color } from "@style/styles.css";
export const title = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
  margin: "8rem 2rem 3.6rem",
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.8rem 2rem",
  flexWrap: "wrap",
  width: "28.4rem",
  margin: "0 4.55rem",
});

export const contentItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.4rem",
  textAlign: "center",
});

export const selected = style({
  color: color.primary.blue600,
});

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
});
