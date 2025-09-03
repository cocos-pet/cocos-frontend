import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css.ts";

export const toast = recipe({
  base: [
    font.body01,
    {
      fontWeight: "500",
      borderRadius: "0.8rem",
      boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
      display: "flex",
      padding: "0.8rem 1.6rem",
      justifyContent: "space-between",
      alignItems: "center",
      width: "28rem",
      position: "fixed",
      top: "4rem",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundSize: "inherit",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  ],
  variants: {
    variant: {
      default: {
        background: color.gray.gray800,
        color: color.gray.gray000,
      },
      error: {
        backgroundImage: `url('/public/svgs/ic_toast_error.svg')`,
        color: color.gray.gray900,
      },
      blue: {
        zIndex: "100", // BottomSheet.tsx가 99
        top: "calc(100dvh - 5rem)",
        background: "rgba(61, 196, 245, 0.70)",
        backdropFilter: "blur(0.6rem)",
        color: color.gray.gray000,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const icon = recipe({
  base: {
    width: "2.1rem",
    height: "2.1rem",
  },
  variants: {
    iconColor: {
      black: {
        color: color.gray.gray900,
      },
      white: {
        color: color.gray.gray000,
      },
    },
  },
  defaultVariants: {
    iconColor: "black",
  },
});

export type ToastVariants = RecipeVariants<typeof icon> & RecipeVariants<typeof toast>;
