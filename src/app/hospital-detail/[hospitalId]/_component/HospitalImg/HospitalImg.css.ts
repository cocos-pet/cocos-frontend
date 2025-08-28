import { style } from "@vanilla-extract/css";

export const hospitalHeaderContainer = style({
  position: "relative",
  width: "100%",
  height: "24rem",
});

export const hospitalImage = style({
  objectFit: "cover",
});

export const backButton = style({
  position: "absolute",
  top: "1.6rem",
  left: "1.6rem",
  zIndex: 1,
  width: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
});
