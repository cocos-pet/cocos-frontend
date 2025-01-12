import { color, font, semanticColor } from "@style/styles.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { marginBottomVar } from "@common/component/Spacing/Spacing.css.ts";

export const container = style({
  display: "flex",
  gap: "0.6rem",
});

export const category = style([
  font.label01,
  {
    color: color.gray.gray700,
  },
]);
export const title = style([
  font.heading02,
  {
    color: color.gray.gray900,
  },
]);
export const contents = style([
  font.body01,
  {
    color: color.gray.gray700,
  },
]);

export const subContents = style([
  font.body02,
  {
    color: color.gray.gray700,
  },
]);
