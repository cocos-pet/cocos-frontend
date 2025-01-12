import { semanticColor } from "@style/styles.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const divider = recipe({
  base: {
    width: "100%",
    backgroundColor: semanticColor.line.normal,
  },

  variants: {
    size: {
      large: { height: "1.6rem" },
      small: { height: "0.1rem" },
    },
  },
});

export type DividerVariants = RecipeVariants<typeof divider>;
//위는 아래와 동일한 타입 생성
/*
export type DividerVariants = {
    size?: 'large' | 'small' 
}
*/
