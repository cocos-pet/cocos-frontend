import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css.ts";
import { button } from "@common/component/Button/styles.css.ts";

export const styles = {
  wrapper: recipe({
    base: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "1rem",
      alignItems: "center",
      padding: "1rem 2rem",
      border: `0.1rem solid ${color.gray.gray200}`,
      borderRadius: "8px",
      background: color.gray.gray000,
    },
    variants: {
      state: {
        default: {},
        error: {
          border: `0.1rem solid ${color.red.warning_red200}`,
        },
        write: {
          padding: "1.2rem",
          ":placeholder": {
            color: color.gray.gray600,
          },
        },
      },
      active: {
        true: {},
        false: {
          background: color.gray.gray300,
          pointerEvents: "none",
          border: "none",
        },
      },
    },
    defaultVariants: {
      state: "default",
      active: true,
    },
  }),
  leftWrap: recipe({
    base: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
  }),
  input: recipe({
    base: [
      font.body01,
      {
        letterSpacing: "-0.28px",
        fontWeight: 500,
        height: "auto",
        maxWidth: "100%",
        color: color.gray.gray900,
        border: "none",
        width: "100%",
        "::placeholder": {
          color: color.gray.gray700,
        },
        ":focus": {
          outline: "none",
        },
      },
    ],
    variants: {
      active: {
        true: {},
        false: {
          background: color.gray.gray300,
          color: color.gray.gray500,
        },
      },
    },
    defaultVariants: {
      active: true,
    },
  }),
  icon: recipe({
    base: {
      height: "2rem",
      display: "flex",
      alignContent: "center",
    },
  }),
};

export type WrapVariants = RecipeVariants<typeof styles.wrapper>;
