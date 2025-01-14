import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const titleStyle = style([
  font.body01,
  {
    color: color.gray.gray500,
    marginTop: "0.8rem",
  },
]);

