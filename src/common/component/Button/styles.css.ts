import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const button = recipe({
  base: [
    font.body01,
    {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.6rem",
      borderRadius: "0.8rem",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
      ":focus": {
        outline: "none",
      },
    },
  ],
  variants: {
    size: {
      small: {
        height: "3.2rem",
        padding: "0.6rem 1.4rem",
      },
      medium: {
        height: "3.6rem",
        padding: "0.8rem 2rem",
      },
      large: {
        height: "4.4rem",
        padding: "1.2rem 2.8rem",
      },
      tag: [
        font.label01,
        {
          height: "2.8rem",
          width: "fit-content",
          padding: "0.4rem 1.4rem",
        },
      ],
    },
    variant: {
      solidPrimary: {
        backgroundColor: "rgb(61, 196, 245)",
        color: "rgb(255, 255, 255)",
        ":hover": {
          backgroundColor: "rgb(60, 188, 234)",
          color: "rgb(244, 244, 244)",
        },
        ":focus": {
          backgroundColor: "rgb(58, 177, 220)",
          color: "rgb(237, 237, 237)",
        },
        ":active": {
          backgroundColor: "rgb(59, 183, 228)",

          color: "rgb(58, 177, 220)",
        },
      },
      solidNeutral: {
        backgroundColor: "rgb(248, 248, 248)",
        color: "rgb(113, 113, 113)",
        ":hover": {
          backgroundColor: "rgb(237, 237, 237)",
          color: "rgb(109, 109, 109)",
        },
        ":focus": {
          backgroundColor: "rgb(222, 222, 222)",
          color: "rgb(107, 107, 107)",
        },
        ":active": {
          backgroundColor: "rgb(231, 231, 231)",
          color: "rgb(104, 104, 104)",
        },
      },
      outlinePrimary: {
        border: `0.1rem solid ${color.primary.blue500}`,
        backgroundColor: "transparent",
        color: color.gray.gray900,
        ":hover": {
          color: "rgba(33, 41, 44, 1)",
          backgroundColor: "rgba(67, 214, 255, 0.05)",
          border: `0.1rem solid ${color.primary.blue500}`,
        },
        ":active": {
          backgroundColor: "rgba(67, 214, 255, 08)",
          color: "rgba(39, 63, 69, 1)",
          border: `0.1rem solid ${color.primary.blue500}`,
        },
        ":focus": {
          backgroundColor: "rgba(67, 214, 255, 0.16)",
          color: "rgba(33, 46, 50, 1)",
          border: `0.1rem solid ${color.primary.blue500}`,
        },
      },
      outlineNeutral: {
        border: `0.1rem solid ${color.gray.gray600}`,
        borderRadius: "10rem",
        backgroundColor: "transparent",
        padding: "0.4rem 1.2rem",
        ":disabled": {
          color: color.gray.gray800,
          backgroundColor: "unset",
          pointerEvents: "none",
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: color.gray.gray300,
        color: color.gray.gray500,
        pointerEvents: "none",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { disabled: true, variant: "outlinePrimary" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid ${color.gray.gray300}`,
        color: color.gray.gray400,
      },
    },
  ],
  defaultVariants: {
    size: "medium",
    variant: "solidPrimary",
    disabled: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;

export const icon = style({
  height: "2rem",
  display: "flex",
  alignItems: "center",
});
