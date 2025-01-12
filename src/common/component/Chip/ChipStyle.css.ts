import { color, font } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

const base = style([
  font.body01,
  {
    display: "flex",
    padding: "0.8rem 1.2rem",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: "9.9rem",
    background: color.gray.gray000,
    color: color.primary.blue700,
    border: `0.1rem solid ${color.primary.blue500}`,
  },
]);

export const styles = {
  default: style([
    base,
    {
      width: "5.8rem",
      height: "3.6rem",
    },
  ]),
  icon: style([
    base,
    {
      width: "8.2rem",
      height: "4rem",
    },
  ]),
  active: style({
    backgroundColor: color.yellow.yellow700,
  }),
};
