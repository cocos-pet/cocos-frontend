import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100%",
  margin: "0 auto",
  position: "relative",
});

export const headerContainer = style({
  padding: "0rem 2rem",
  zIndex: 1000,
  width: "100%",
  transform: "translateY(-50%)",
});
