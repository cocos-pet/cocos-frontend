import { color, font } from "@style/styles.css.ts";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const chipItem = recipe({
  base: [
    font.body01,
    {
      display: "flex",
      padding: "0.8rem 1.2rem",
      justifyContent: "space-between",

      borderRadius: "9.9rem",
      color: color.primary.blue700,
      border: `0.1rem solid ${color.primary.blue500}`,
      flexShrink: "0",
    },
  ],

  variants: {
    size: {
      small: {
        height: "3.6rem",
      },
      large: {
        height: "4rem",
      },
    },

    color: {
      blue: {
        color: color.primary.blue700,
        border: `0.1rem solid ${color.primary.blue500}`,
      },
      gray: {
        color: color.gray.gray700,
        border: `0.1rem solid ${color.gray.gray700}`,
      },
    },

    active: {
      false: {
        background: color.gray.gray000,
      },
      true: {
        backgroundColor: "rgba(67, 214, 255, 0.16)",
      },
    },
  },
  defaultVariants: {
    size: "small",
    color: "blue",
    active: false,
  },
});

export type ChipType = RecipeVariants<typeof chipItem>;
