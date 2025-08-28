import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const align = style({
  display: "flex",
  alignItems: "center",
});

export const title = style([
  font.body01,
  {
    color: color.gray.gray900,
  },
]);

export const optional = style([
  font.caption01,
  {
    color: color.gray.gray700,
  },
]);
