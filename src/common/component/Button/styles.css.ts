import { style, styleVariants } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const styles = {
  button: style([
    font.body01,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "3rem",
      padding: "0 1rem",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
      ":focus": {
        outline: "none",
      },
    },
  ]),
  small: style({
    height: "2rem",
    padding: "0 0.5rem",
  }),
  medium: style({
    height: "3rem",
    padding: "0 1rem",
  }),
  large: style({
    height: "4rem",
    padding: "0 1.5rem",
  }),
  disabled: style({
    background: color.gray.gray300,
    pointerEvents: "none",
  }),
  icon: style({
    height: "2rem",
    alignContent: "center",
  }),
};
