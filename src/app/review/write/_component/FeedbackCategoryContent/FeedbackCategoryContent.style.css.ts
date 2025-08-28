import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    padding: "2rem",
  },
  variants: {
    type: {
      blue: {},
      yellow: {
        alignItems: "flex-end",
      },
    },
  },
});
