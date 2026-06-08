import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  zIndex: 20,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  padding: "0 2rem",
  paddingBottom: "2rem",
  marginTop: "6.4rem",
});

export const reviewList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});
