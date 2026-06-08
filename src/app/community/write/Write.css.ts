import { style } from "@vanilla-extract/css";
import { color } from "@style/styles.css.ts";

export const headerContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  zIndex: 20,
});

export const writeWrap = style({
  backgroundColor: color.gray.gray100,
  padding: "2rem",
  marginTop: "6.4rem",
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
  position: "sticky",
  bottom: 0,
  backgroundColor: color.gray.gray000,
  width: "100%",
  padding: "1.2rem 2rem 3.2rem 2rem",
});
