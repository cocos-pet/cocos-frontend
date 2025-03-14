import {style} from "@vanilla-extract/css";
import {color, font} from "@style/styles.css.ts";

export const titleStyle = style([
  font.title03,
  {
    color: color.gray.gray900,
    maxWidth: "32rem",
    maxHeight: "5.8rem",
    wordBreak: "keep-all",
  },
]);
