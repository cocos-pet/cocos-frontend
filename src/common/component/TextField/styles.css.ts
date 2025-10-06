import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, font, semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const styles = {
  wrapper: recipe({
    base: {
      width: "100%",
      height: "4rem",
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

        main: {
          boxShadow: " 0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
        },

        focus: { border: `0.1rem solid ${color.primary.blue600}` },
        done: {
          border: `0.1rem solid ${color.primary.blue600}`,
          backgroundColor: "rgba(67, 214, 255, 0.16)",
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
      width: "calc(100% - 20px)",
    },
  }),
  input: recipe({
    base: [
      font.body01,
      {
        fontWeight: 500,
        height: "20px",
        lineHeight: "20px",
        minWidth: "100%",
        maxWidth: "100%",
        color: color.gray.gray900,
        border: "none",
        // width: "100%",
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
          fontSize: "1.6rem",

          "::placeholder": {
            color: color.gray.gray600,
          },
        },
        error: {},
        search: {},
        main: {},
        centerPlaceholder: { maxWidth: "8rem", textAlign: "center" },
        focus: {},
        done: { backgroundColor: "transparent" },
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
      marginRight: "0.4rem",
    },
  ]),
};

export const clearButton = style({
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  height: "2rem",
});

export const iconstyle = style({
  height: "2rem",
  width: "2rem",
  display: "flex",
  alignContent: "center",
  marginRight: "1rem",
});

export type WrapVariants = RecipeVariants<typeof styles.wrapper>;
export type InputVariants = RecipeVariants<typeof styles.input>;
