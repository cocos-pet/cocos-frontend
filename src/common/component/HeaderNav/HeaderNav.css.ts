import { font, color } from "@style/styles.css.ts";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const headerItem = recipe({
  base: [
    font.heading03,
    {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      alignItems: "center",
      justifyItems: "center",

      width: "37.5rem",
      height: "6.4rem",
      padding: "1.8rem 2.2rem",

      borderBottom: `1px solid ${color.gray.gray200}`,
      backgroundColor: color.gray.gray000,
      color: color.gray.gray900,
    },
  ],
  variants: {
    type: {
      // 아이콘 + 텍스트필드
      field: {
        gridTemplateColumns: "auto 1fr",
        gap: "0.8rem",
      },

      // 아이콘 + 타이틀없음 + 아이콘
      noTitle: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
  },
});

// 오른쪽 버튼_아이콘 또는 텍스트
export const btnItem = recipe({
  base: [
    font.body01,
    {
      color: color.gray.gray600,
      backgroundColor: "transparent",
      padding: "0",
      border: "none",
      textDecoration: "none",
      transition: "background-color 0.3s",
      ":focus": {
        outline: "none",
      },
    },
  ],
  variants: {
    side: {
      left: { justifySelf: "start" },
      right: { justifySelf: "end" },
    },
  },
});

export type HeaderItemVariant = RecipeVariants<typeof headerItem>;
