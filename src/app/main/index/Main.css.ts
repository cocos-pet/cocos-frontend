import {style} from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100%",
  margin: "0 auto",
  position: "relative",
});

export const headerContainer = style({
  position: "absolute",
  top: "18rem",
  padding: "0rem 2rem 0rem 2rem",
  zIndex: 4,
  width: "100%",
});
