import { recipe } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const button = recipe({
  base: [
    font.body01,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.6rem",
      borderRadius: "8px",
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
    },
    variant: {
      solidPrimary: {
        backgroundColor: color.primary.blue600,
        color: "#fff",
        ":hover": {
          backgroundColor: color.primary.blue800,
        },
      },
      solidNeutral: {
        backgroundColor: color.gray.gray100,
        color: color.gray.gray700,
        ":hover": {
          backgroundColor: color.gray.gray300,
        },
        ":active": {
          backgroundColor: color.gray.gray400,
        },
      },
      outlinePrimary: {
        border: `0.1rem solid ${color.primary.blue500}`,
        backgroundColor: "transparent",
        color: color.gray.gray700,
        ":hover": {
          backgroundColor: color.gray.gray100,
        },
        ":active": {
          backgroundColor: color.primary.blue300,
          border: `0.1rem solid ${color.primary.blue500}`,
        },
        ":focus": {
          border: `0.1rem solid ${color.primary.blue500}`,
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: color.gray.gray300,
        color: color.gray.gray500,
        pointerEvents: "none",
      },
      outlinePrimary: {
        backgroundColor: "transparent",
        border: `1px solid ${color.gray.gray300}`,
        color: color.gray.gray400,
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

export const icon = style({
  height: "2rem",
  display: "flex",
  alignItems: "center",
});
