import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";


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