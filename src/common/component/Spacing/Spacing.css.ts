import { createVar, style } from "@vanilla-extract/css";

//동적 스타일링 (style 관련된 코드는 반드시 .css.ts에 작성하는게 rule
export const marginBottomVar = createVar();
export const container = style({
  marginBottom: marginBottomVar,
  backgroundColor: "black",
});
