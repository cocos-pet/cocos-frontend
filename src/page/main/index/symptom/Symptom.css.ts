import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const symptomContainer = style({
  display: "flex",
  gap: "1.2rem",
  flexDirection: "column",
  width: "100%",
  marginTop: "4.2rem",
  marginBottom: "3.2rem",
});

export const symptomTitle = style([
  { marginLeft: "2rem" },
  font.heading02,
  {
    color: semanticColor.text.normal,
  },
]);

export const symptomGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
});

export const symptomItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const symptomName = style([
  font.label01,
  {
    color: semanticColor.text.normal,
    textAlign: "center",
    fontWeight: "500",
  },
]);
