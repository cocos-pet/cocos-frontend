import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, font, semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

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
        },
        centerPlaceholder: { maxWidth: "12rem" },
        search: {
          width: "100%",
          marginLeft: "2rem",
          border: `0.1rem solid ${semanticColor.line.strong}`,
          backgroundColor: semanticColor.neutral.normal,
          boxShadow: " 0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
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
      width: "inherit",
    },
  }),
  input: recipe({
    base: [
      font.body01,
      {
        letterSpacing: "-0.28px",
        fontWeight: 500,
        height: "auto",
        minWidth: "100%",

        maxWidth: "100%",
        color: color.gray.gray900,
        border: "none",
        width: "100%",
        "::placeholder": {
          color: color.gray.gray600,
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
      state: {
        default: {},
        write: {
          "::placeholder": {
            color: color.gray.gray600,
          },
        },
        error: {},
        search: {},
        centerPlaceholder: { maxWidth: "8rem", textAlign: "center" },
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

  mention: style([
    font.body01,
    {
      color: semanticColor.primary.heavy,
      fontWeight: 500,
      flexShrink: 0,
    },
  ]),
};

export const iconstyle = style({
  height: "2rem",
  display: "flex",
  alignContent: "center",
  marginRight: "1rem",
});

export type WrapVariants = RecipeVariants<typeof styles.wrapper>;
export type InputVariants = RecipeVariants<typeof styles.input>;
