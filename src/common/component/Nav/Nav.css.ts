import { recipe } from "@vanilla-extract/recipes";
import { font, color } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const container = style([
  font.label01,
  {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "8rem",
    padding: "1.2rem 3.2rem 0 3.2rem",
  },
]);

export const navItem = recipe({
  base: {
    display: "flex",
    width: "5.6rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1.2rem",
    whiteSpace: "nowrap",
  },
  variants: {
    state: {
      true: {
        color: color.gray.gray900,
      },
      false: {
        color: color.gray.gray500,
      },
    },
  },
  defaultVariants: {
    state: false,
  },
});
