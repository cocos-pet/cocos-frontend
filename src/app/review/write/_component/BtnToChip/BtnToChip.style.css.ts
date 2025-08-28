import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const wrapper = recipe({
  base: [
    font.heading03,
    {
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "1.2rem",
      alignItems: "center",

      borderRadius: "8px",
      backgroundColor: color.gray.gray000,
    },
  ],
  variants: {
    selected: {
      false: {
        color: color.gray.gray500,
        border: `1px solid ${color.gray.gray200}`,
      },
      true: {
        color: color.primary.blue700,
        border: `1px solid ${color.primary.blue500}`,
      },
    },
  },
});

export const buttonText = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const icon = style({
  width: 20,
  height: 20,
});
