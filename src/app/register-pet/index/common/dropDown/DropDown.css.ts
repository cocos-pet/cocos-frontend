import { style } from "@vanilla-extract/css";
import { font, color } from "@style/styles.css.ts";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    position: "absolute",

    display: "flex",
    flexDirection: "column",
    maxWidth: "72.8rem",
    padding: "0 2rem",

    backgroundColor: color.gray.gray000,
    borderRadius: "1.6rem",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
    zIndex: "3",
  },
  variants: {
    size: {
      full: {
        width: "calc(100vw - 4rem)",
      },
      half: {
        width: "15.1rem",
      },
    },
  },
  defaultVariants: {
    size: "full",
  },
});

export const span = style({
  padding: "0.6rem 1.2rem",
  margin: "1.2rem 0",
});

export const itemStyle = style([
  font.body01,
  {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    color: color.gray.gray900,
  },
]);
