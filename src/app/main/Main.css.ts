import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100%",
  margin: "0 auto",
  position: "relative",
});

export const headerContainer = style({
  padding: "0rem 2rem",
  zIndex: 1000,
  width: "100%",
  transform: "translateY(-50%)",
});

export const alarmButton = style({
  position: "absolute",
  top: "2rem",
  right: "2rem",
  zIndex: 1100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
});
