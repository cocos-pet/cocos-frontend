import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const locationHeader = style({
  height: "6.4rem",
  display: "flex",
  alignItems: "center",
  padding: "0 2rem",
  borderBottom: `1px solid ${color.gray.gray200}`
});

export const locationWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem"
});

export const locationText = style([
  font.body01,
  {
    color: color.gray.gray900
  },{
    marginLeft:"0.6rem"
  }
]);
