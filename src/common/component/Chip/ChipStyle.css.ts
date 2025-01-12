import { color, font } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

const base = style([
  font.body01,
  {
    display: "flex",
    padding: "0.8rem 1.2rem",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "9.9rem",
    background: color.gray.gray000,
  },
]);

export const styles = {
  default: style([
    base,
    {
      width: "5.8rem",
      height: "3.6rem",

      color: color.primary.blue500,
      border: `0.1rem solid ${color.primary.blue500}`,
    },
  ]),
  dropdown: style([
    base,
    {
      width: "8.2rem",
      height: "4rem",

      color: color.gray.gray700,
      border: `0.1rem solid ${color.gray.gray700}`,
    },
  ]),
};
