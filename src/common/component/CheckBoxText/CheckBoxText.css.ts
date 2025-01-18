import { font, semanticColor } from "@style/styles.css";
import { recipe } from "@vanilla-extract/recipes";

export const checkboxText = recipe({
  base: [
    font.body01,
    {
      display: "flex",
      width: "100%",
      height: "44px",
      padding: "12px 8px",
      alignItems: "flex-start",
      gap: "16px",
      borderRadius: "9px",
      color: semanticColor.text.normal,
    },
  ],

  variants: {
    isSelected: {
      true: {
        border: `1px solid ${semanticColor.primary.normal}`,
        color: semanticColor.text.heavy,
        backgroundColor: "rgba(67, 214, 255, 0.16)",
      },
      false: {
        border: "1px solid white",
      },
    },
  },
});
