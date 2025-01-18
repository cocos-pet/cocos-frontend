import { createVar, style } from "@vanilla-extract/css";

export const marginBottomVar = createVar();
export const container = style({
  marginBottom: marginBottomVar,
  backgroundColor: "black",
});
