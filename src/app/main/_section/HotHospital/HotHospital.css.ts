import { color, font, semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const hotHospitalContainer = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: "2rem",
  marginTop: "3.2rem 2rem 3.2rem 2rem",
});

export const titleContainer = style({
  display: "flex",
  gap: "0.4rem",
});

export const subTitle = style([
  font.label01,
  {
    color: semanticColor.text.normal,
    fontWeight: "500",
  },
]);

export const title = style([
  { marginBottom: "1.2rem" },
  font.heading02,
  {
    color: semanticColor.text.normal,
  },
]);

export const nickname = style([
  font.heading02,
  {
    fontWeight: "600",
    color: color.primary.blue700,
  },
]);
