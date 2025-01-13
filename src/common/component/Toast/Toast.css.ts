import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

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
      // height: "4rem",
      position: "fixed",
      top: "4rem",
      left: "50%",
      transform: "translate(-50%, -50%)", // 중앙 정렬
      backgroundSize: "inherit", // 배경 이미지가 잘리거나 왜곡되지 않도록 설정
      backgroundRepeat: "no-repeat", // 반복 방지
      backgroundPosition: "center", // 이미지 중앙 배치
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
        background: color.gray.gray000,
      },
    },
  },
  defaultVariants: {
    iconColor: "black",
  },
});

export type ToastVariants = RecipeVariants<typeof icon> &
  RecipeVariants<typeof toast>;
