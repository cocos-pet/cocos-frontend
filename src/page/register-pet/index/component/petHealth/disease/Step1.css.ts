import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const title = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
  margin: "8rem 2rem 3.6rem",
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.8rem 2rem",
  flexWrap: "wrap",
  margin: "0 4.55rem",
});

export const contentItem = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.4rem",
    textAlign: "center",
  },
  variants: {
    isClicked: {
      true: { backgroundColor: "rgba(67, 214, 255, 0.16)", borderRadius: "4px" },
      false: { backgroundColor: "transparent" },
    },
  },
});

export const selected = style({
  color: color.primary.blue600,
});

export const btnWrapper = style({
  maxWidth: "76.8rem",
  width: "100%",
  position: "fixed",
  bottom: 0,
  display: "grid",
  gridTemplateColumns: "9.6rem calc(100% - 10.8rem)",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
});

export const spanFont = style([
  font.label01,
  {
    color: color.gray.gray900,

    fontWeight: 600,
    letterSpacing: "-0.024rem",
  },
]);

export type ItemType = RecipeVariants<typeof contentItem>;
