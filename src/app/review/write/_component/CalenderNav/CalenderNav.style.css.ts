import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const captionWrapper = style({
  width: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.8rem",
});

export const caption = style([
  font.body01,
  {
    color: color.gray.gray900,
    fontWeight: "700",
    fontSize: "1.76rem",
  },
]);
