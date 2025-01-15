import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const nothingContent = style([
  font.body01,
  {
    display: "flex",
    width: "33.5rem",
    height: "32rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    color: semanticColor.disable.text,
    textAlign: "center",
  },
]);
