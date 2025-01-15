import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "37.5rem",
  margin: "0 auto",
  position: "relative", 
});

export const headerContainer = style({
  position: "absolute", 
  top: "18rem",
  zIndex: 4,
});
