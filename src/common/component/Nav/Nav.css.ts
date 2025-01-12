import * as styles from "@vanilla-extract/css";
import { font, color } from "@style/styles.css.ts";

export const container = styles.style([
  font.label01,
  {
    display: "flex",
    justifyContent: "space-between",
    width: "37.5rem",
    height: "8rem",
    padding: "1.2rem 3.2rem 0 3.2rem",
  },
]);

export const wrapper = styles.style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1.2rem",
});

export const disabled = styles.style({
  color: color.gray.gray500,
});

export const enabled = styles.style({
  color: color.gray.gray900,
});
