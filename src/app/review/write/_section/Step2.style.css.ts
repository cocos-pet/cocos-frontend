import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",

  padding: "2rem 2rem 0",
});

export const btnLayout = style({
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
