import { color, font } from "@style/styles.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const chipStyle = recipe({
  base: [
    font.body01,
    {
      color: color.gray.gray900,
      backgroundColor: color.gray.gray000,

      display: "flex",
      alignItems: "center",
      padding: "0.8rem 1.2rem",

      width: "fit-content",
      height: " 3.6rem",
      borderRadius: "8px",
      flexShrink: "0",
    },
  ],
  variants: {
    type: {
      blue: {
        border: `1px solid ${color.primary.blue600}`,
      },
      yellow: {
        border: `1px solid ${color.red.point_red}`,
      },
    },
    selected: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: { type: "blue", selected: true },
      style: {
        color: color.primary.blue700,
        backgroundColor: color.primary.blue100,
      },
    },
    {
      variants: { type: "yellow", selected: true },
      style: {
        color: color.red.point_red,
        backgroundColor: color.yellow.yellow300,
      },
    },
  ] as const,
});

export type ColorChipVariant = RecipeVariants<typeof chipStyle>;
