import { font, color } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const HeaderItem = recipe({
  base: [
    font.heading03,
    {
      display: "grid", // flex에서 grid로 변경
      gridTemplateColumns: "repeat(3, 1fr)", // 3개의 영역: 왼쪽, 중간, 오른쪽
      gridTemplateAreas: `
        "left center right"
      `, // 각 영역 이름 지정
      alignItems: "center",
      width: "37.5rem",
      height: "6.4rem",
      padding: "1.8rem 2.2rem",
      backgroundColor: color.gray.gray000,
      color: color.gray.gray900,
    },
  ],
  variants: {
    type: {
      // 아이콘 + 텍스트 필드 헤더
      field: {
        gridTemplateColumns: "auto 1fr", // 라벨과 필드를 왼쪽-오른쪽으로 배치

        gap: "0.8rem",
      },

      // 아이콘 + 라벨 + x
      onlyLabel: {
        justifyItems: "center",
      },

      //  아이콘 + 라벨 + 아이콘(텍스트버튼)
      labelBtn: {
        justifyItems: "center",
      },

      // 아이콘 + x + 아이콘
      onlyBtn: {
        gridTemplateColumns: "repeat(2, 1fr)",

        justifyItems: "center",
      },
    },
  },
});

// 오른쪽 텍스트 버튼 스타일
export const rightIconStyle = style([
  font.body01,
  {
    justifySelf: "end",

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
]);

export const leftIconStyle = style({
  justifySelf: "start",
});

export type HeaderItemVariant = RecipeVariants<typeof HeaderItem>;
