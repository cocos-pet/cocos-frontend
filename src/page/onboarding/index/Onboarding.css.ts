import { style } from "@vanilla-extract/css";

export const layout = style({
  display: "flex",
  flexDirection: "column",
});

export const btnWrapper = style({
  position: "fixed",
  bottom: 0,

  display: "grid",
  gridTemplateColumns: "96px 227px",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
});
