import { recipe } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css.ts";

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
    },
    variants: {
      state: {
        default: {},
        error: {
          border: `0.1rem solid ${color.red.warning_red200}`,
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
      centerPlaceholder: {
        true: {
          maxWidth: "12rem",
        },
        false: {},
      },
    },
    defaultVariants: {
      state: "default",
      active: true,
      centerPlaceholder: false,
    },
  }),

  input: recipe({
    base: [
      font.body01,
      {
        letterSpacing: "-0.28px",
        fontWeight: 500,
        height: "auto",
        color: color.gray.gray900,
        border: "none",
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
      centerPlaceholder: {
        true: {
          maxWidth: "8rem",
          textAlign: "center",
        },
        false: {},
      },
    },
    defaultVariants: {
      active: true,
      centerPlaceholder: false,
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
