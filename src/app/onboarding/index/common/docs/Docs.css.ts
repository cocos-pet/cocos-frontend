import {color, font} from "@style/styles.css.ts";
import {recipe, RecipeVariants} from "@vanilla-extract/recipes";

export const docsStyle = recipe({
  base: [
    font.body01,
    {
      marginLeft: "0.9rem",
      color: color.red.warning_red200,
    },
  ],
  variants: {
    state: {
      none: { color: color.gray.gray500, marginLeft: "0" },
      lError: {},
      sError: [font.caption01],
    },
  },
});


export type titleStyleVariant = RecipeVariants<typeof docsStyle>;
