import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { button } from "@common/component/Button/styles.css.ts";
import { color, font } from "@style/styles.css.ts";

export const container = recipe({
  base: {
    margin: "20rem",
    position: "relative",
    width: "2.4rem",
  },
  variants: {
    iconSize: {
      "24": {
        width: "2.4rem",
        height: "2.4rem",
      },
      "20": {
        width: "2.0rem",
        height: "2.0rem",
      },
    },
  },
});

export const moreIcon = recipe({
  base: {
    width: "2.4rem",
    height: "2.4rem",
  },
  variants: {
    iconSize: {
      "24": {
        width: "2.4rem",
        height: "2.4rem",
      },
      "20": {
        width: "2.0rem",
        height: "2.0rem",
      },
    },
  },
});

export type MoreIconProps = RecipeVariants<typeof moreIcon>;

export const moreModal = style({
  position: "absolute",
  top: "calc(100% + 0.8rem)",
  left: "-16rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.1rem",
  borderRadius: "1.2rem",
  backgroundColor: "white",
  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
  width: "18.4rem",
  height: "5.6rem",
  zIndex: 10,
});

export const moreModalCon = style({
  width: "18.4rem",
  height: "100%",
  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
});

export const moreModalItem = style([
  font.body01,
  {
    position: "absolute",
    background: "none",
    border: "none",
    borderRadius: "1.2rem",
    textAlign: "left",
    width: "100%",
    padding: "1.8rem 3.2rem",
    color: color.red.warning_red200,
    ":active": {
      backgroundColor: color.gray.gray200,
    },
  },
]);
