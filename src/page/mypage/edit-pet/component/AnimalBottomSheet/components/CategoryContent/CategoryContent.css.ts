import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const styles = {
  kindWrapper: recipe({
    base: {
      display: "flex",
      padding: "1.2rem 0rem",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.8rem",

      height: "45rem",
      overflowY: "scroll",
      selectors: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
    variants: {
      isBreed: {
        true: { marginTop: "5.6rem" },
        false: { padding: "1.6rem 0rem" },
      },
    },
  }),

  symptomsWrapper: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }),
};
