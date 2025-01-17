import { recipe } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  display: "flex",
  gap: "3.2rem",
});

export const selector = recipe({
  base: [
    font.heading03,
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "3.1rem",

      width: "13rem",
      height: "17.3rem",
      padding: "2.4rem 1.3rem",
      borderRadius: "8px",
      border: `1px solid ${color.primary.blue500}`,
    },
  ],
  variants: {
    state: {
      unselected: {
        color: color.gray.gray900,
        backgroundColor: color.gray.gray000,
      },
      selected: {
        color: color.primary.blue600,
        backgroundColor: color.yellow.yellow100,
      },
    },
  },
});
