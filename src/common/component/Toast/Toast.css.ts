import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const toast = recipe({
  base: [
    font.body01,
    {
      fontWeight: "500",
      borderRadius: "0.8rem",
      background: color.gray.gray800,
      boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
      display: "flex",
      padding: "0.8rem 1.6rem",
      justifyContent: "space-between",
      alignItems: "center",
      width: "calc(100% - 4rem)",
      margin: "2rem",
      position: "fixed",
      top: "0",
    },
  ],
  variants: {
    variant: {
      default: {
        background: color.gray.gray800,
        color: color.gray.gray000,
      },
      error: {
        background: color.red.warning_red100,
        color: color.gray.gray900,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const icon = recipe({
  base: {
    width: "2.1rem",
    height: "2.1rem",
  },
  variants: {
    iconColor: {
      black: {
        fill: "black",
      },
      white: {
        fill: "white",
      },
    },
  },
  defaultVariants: {
    iconColor: "black",
  },
});

export type ToastVariants = RecipeVariants<typeof icon> &
  RecipeVariants<typeof toast>;
