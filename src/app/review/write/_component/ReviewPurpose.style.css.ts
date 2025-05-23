import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const questionStyle = style([
  font.body01,
  {
    color: color.gray.gray900,
  },
]);

export const starStyle = style([
  font.body01,
  {
    color: color.red.warning_red200,
  },
]);
export const chipLayout = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.2rem 0.4rem",
});
