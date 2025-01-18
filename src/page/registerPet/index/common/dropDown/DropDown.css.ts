import { style } from "@vanilla-extract/css";
import { font } from "@style/styles.css.ts";

export const container = style({
  position: "absolute",

  display: "flex",
  flexDirection: "column",
  width: "calc(100vw - 4rem)",
  maxWidth: "72.8rem",
  padding: "0 2rem",

  borderRadius: "1.6rem",
  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
});

export const span = style({
  padding: "0.6rem 1.2rem",
  margin: "1.2rem 0",
});

export const itemStyle = style([
  font.body01,
  {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
]);
