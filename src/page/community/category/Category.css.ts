import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticColor } from "@style/styles.css";

export const categoryContainer = style({
  width: "100%",
});

export const postsContainer = style({
  padding: "1.6rem 2rem 2rem 2rem",
});

export const filterContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.6rem 2rem 0rem 2rem",
});

export const floatingBtnContainer = style({
  position: "fixed",
  bottom: "1.6rem",
  right: "max(2.8rem, calc((100% - 76.8rem) / 2 + 2.8rem))",
});

export const filter = recipe({
  base: {
    width: "2.4rem",
    cursor: "pointer",
  },
  variants: {
    applied: {
      true: {
        color: semanticColor.text.strong,
      },
      false: {
        color: semanticColor.text.assistive,
      },
    },
  },
  defaultVariants: {
    applied: false,
  },
});
