import { color, font, semanticColor } from "@style/styles.css.ts";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const chipItem = recipe({
  base: [
    font.body01,
    {
      display: "flex",
      padding: "0.8rem 1.2rem",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.4rem",

      borderRadius: "9.9rem",
      color: color.primary.blue700,
      border: `0.1rem solid ${color.primary.blue500}`,
      flexShrink: "0",
    },
  ],

  variants: {
    size: {
      small: {
        height: "3.2rem",
      },
      large: {
        height: "3.6rem",
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
      red: {
        color: color.red.warning_red200,
        border: `0.1rem solid ${color.red.warning_red200}`,
      },
      solidBlue: {
        color: color.primary.blue700,
        border: `0.1rem solid ${color.primary.blue500}`,
      },
      border: {
        color: semanticColor.text.normal,
        border: `0.1rem solid ${semanticColor.line.heavy}`,
        fontWeight: "500",
      },
    },

    active: {
      false: {
        background: color.gray.gray000,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        color: "blue",
        active: true,
      },
      style: {
        backgroundColor: "rgba(67, 214, 255, 0.16)",
      },
    },

    {
      variants: {
        color: "red",
        active: true,
      },
      style: {
        backgroundColor: "#F5D8D8",
      },
    },
    {
      variants: {
        color: "solidBlue",
        active: true,
      },
      style: {
        color: color.gray.gray000,
        background: color.primary.blue500,
      },
    },
  ],

  defaultVariants: {
    size: "small",
    color: "blue",
    active: false,
  },
});

export type ChipType = RecipeVariants<typeof chipItem>;
