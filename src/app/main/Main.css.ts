import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100%",
  margin: "0 auto",
  position: "relative",
});

export const headerContainer = style({
  position: "absolute",
  top: "14.5rem",
  padding: "0rem 2rem",
  zIndex: 1000,
  width: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  "@media": {
    "(min-width: 450px) and (max-width: 600px)": {
      top: "24rem",
      transform: "translate(-50%, -50%)",
    },
    "(min-width: 600px)": {
      top: "34rem",
      transform: "translate(-50%, -50%)",
    },
  },
});
