import { createVar, style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const writeWrap = style({
  backgroundColor: color.gray.gray200,
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
});

export const imageContainer = style({
  display: "flex",
  gap: "1.2rem",
  overflow: "auto",
  scrollbarWidth: "none",
});

export const fileInput = style({
  display: "none",
});

export const plusImage = style({
  width: "10.4rem",
  height: "10.4rem",
  minWidth: "10.4rem",
  borderRadius: "0.8rem",
});

export const bottomButton = style({
  backgroundColor: color.gray.gray000,
  width: "100%",
  padding: "1.2rem 2rem 3.2rem 2rem",
});
