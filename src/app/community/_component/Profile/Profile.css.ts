import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const profileContainer = style({
  display: "flex",
  gap: "0.8rem",
});

export const icon = style({
  width: "2.4rem",
});

export const profileImage = style({
  width: "3.2rem",
  height: "3.2rem",
  borderRadius: "50%",
});
export const userProfile = style({
  width: "3.2rem",
  height: "3.2rem",
  borderRadius: "50%",
});
export const info = style({
  display: "flex",
  flexDirection: "column",
});
export const infoName = style([
  font.label01,
  {
    color: color.gray.gray800,
    lineHeight: "130%",
    height: "16px",
  },
]);
export const infoDetail = style([
  font.label01,
  {
    fontWeight: "500",
    color: color.gray.gray700,
    lineHeight: "130%",
  },
]);
