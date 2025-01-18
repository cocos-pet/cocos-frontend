import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100%",
  margin: "0 auto",
  position: "relative",
});

export const headerContainer = style({
  position: "absolute",
  top: "18rem",
  width: "100%",
  padding: "0rem 4rem 0rem 0rem",
  zIndex: 4,
});
