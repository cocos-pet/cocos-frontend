import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const symptomContainer = style({
  display: "flex",
  gap: "3.2rem",
  flexDirection: "column",
  width: "37.5rem",
  marginLeft: "2rem",
});

export const symptomTitle = style([
  font.heading02,
  {
    letterSpacing: "-0.18rem",
    color: semanticColor.text.normal,
  },
]);
