import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const largeText = style([
  font.body01,
  {
    color: color.red.warning_red100,
  },
]);
