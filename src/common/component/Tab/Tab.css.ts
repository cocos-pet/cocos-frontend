import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tab = style({
  display: "flex",
  width: "5.6rem",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.4rem",
});

export const tabContent = style([
  font.body01,
  {
    display: "flex",
    height: "3.6rem",
    padding: "0.8rem 1.6rem",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    whiteSpace: "nowrap",
    color: semanticColor.text.normal,
  },
]);

export const tabBar = recipe({
  base: {
    width: "2.4rem",
    height: "0.4rem",
    borderRadius: "2px",
  },
  variants: {
    active: {
      true: { backgroundColor: semanticColor.primary.heavy },
      false: { backgroundColor: "transparent" },
    },
  },
});
