import { color, font } from "@style/styles.css.ts";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

// 여기서부터 변경사항
export const chipItem = recipe({
  base: [
    font.body01,
    {
      display: "flex",
      padding: "0.8rem 1.2rem",
      justifyContent: "space-between",
      alignItems: "center",

      borderRadius: "9.9rem",
      // background: color.gray.gray000,
      color: color.primary.blue700,
      border: `0.1rem solid ${color.primary.blue500}`,
    },
  ],

  variants: {
    // 아이콘이 없으면 S, 아이콘이 있으면 L
    size: {
      small: {
        width: "5.8rem",
        height: "3.6rem",
      },
      large: {
        width: "8.2rem",
        height: "4rem",
      },
    },

    // 텍스트 및 보더색상
    text: {
      gray: {
        color: color.gray.gray700,
        border: `0.1rem solid ${color.gray.gray700}`,
      },
      blue: {
        color: color.primary.blue700,
        border: `0.1rem solid ${color.primary.blue500}`,
      },
    },

    // 배경색
    bgColor: {
      gray: {
        background: color.gray.gray000,
      },
      blue: {
        backgroundColor: "rgba(67, 214, 255, 0.16)",
      },
    },
  },
  defaultVariants: {
    size: "small",
    text: "blue",
    bgColor: "gray",
  },
});

export type ChipType = RecipeVariants<typeof chipItem>;
