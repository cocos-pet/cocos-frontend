import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const questionStyle = style([
  font.body01,
  {
    color: color.gray.gray900,
  },
]);
