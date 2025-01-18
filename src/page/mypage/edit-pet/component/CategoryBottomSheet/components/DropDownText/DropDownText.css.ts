import { color, font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const dropdownTextWrapper = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
});

export const dropdownText = style([
  font.body01,
  {
    display: "flex",
    width: "100%",
    height: "4.4rem",
    padding: "1.2rem 0.8rem",
    alignItems: "flex-start",
    gap: "1.6rem",
    color: semanticColor.text.normal,
    borderBottom: `1px solid ${color.gray.gray100}`,
  },
]);

export const dropdownContent = style({
  display: "flex",
  padding: "0.8rem",
  width: "100%",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: "1rem",
  alignSelf: "stretch",
  backgroundColor: semanticColor.neutral.strong,

  flexWrap: "wrap",
});

export const rotateIcon = recipe({
  base: {
    //transition: "transform 0.3s ease",
  },
  variants: {
    isOpen: {
      true: {
        transform: "rotate(0deg)",
      },
      false: {
        transform: "rotate(180deg)",
      },
    },
  },
});
