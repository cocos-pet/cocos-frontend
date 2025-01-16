import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const label = style([
  font.body01,
  {
    fontWeight: 500,
    color: color.gray.gray900,
  },
]);

export const child = style({});
