import { style } from "@vanilla-extract/css";
import { color } from "@style/styles.css";

import { createVar } from "@vanilla-extract/css";

export const progressSizeVar = createVar();

export const barStyle = style({
  maxWidth: "72.8rem",
  overflow: "hidden",
  position: "relative",
  top: "4rem",

  width: "calc(100vw - 4rem)",
  height: "0.8rem",
  margin: "0 2rem",
  borderRadius: "3.408px",
  backgroundColor: color.gray.gray100,
});

export const itemStyle = style({
  width: progressSizeVar,
  height: "8rem",
  padding: "0",
  borderRadius: "3.408px",
  backgroundColor: color.primary.blue500,
  transition: "width 0.5s ease-in-out",
});
