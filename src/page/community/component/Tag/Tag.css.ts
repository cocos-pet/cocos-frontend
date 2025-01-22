import { createVar, style } from "@vanilla-extract/css";
import { color, font, semanticColor } from "@style/styles.css.ts";
import { recipe } from "@vanilla-extract/recipes";

export const tagContainer = recipe({
  base: [
    font.heading03,
    {
      height: "4.8rem",
      width: "100%",

      padding: "0.8rem 1.2rem",

      borderRadius: "0.8rem",
      border: `1px solid ${color.gray.gray200}`,

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      backgroundColor: color.gray.gray000,
      color: color.gray.gray500,
      cursor: "pointer",
      transition: "0.3s",

      whiteSpace: "nowrap",
      overflow: "hidden",

      ":active": {
        border: `1px solid ${semanticColor.primary.normal}`,
        color: semanticColor.text.heavy,
      },
      ":focus": {
        border: `1px solid ${semanticColor.primary.normal}`,
        color: semanticColor.text.heavy,
      },
    },
  ],
  variants: {
    active: {
      true: {
        border: `1px solid ${semanticColor.primary.normal}`,
        backgroundColor: color.gray.gray000,
        color: semanticColor.text.heavy,
      },
      false: {
        backgroundColor: color.gray.gray000,
        color: color.gray.gray500,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const tagValue = style([
  font.heading03,
  {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    width: "calc(100% - 2.4rem)",
  },
]);
