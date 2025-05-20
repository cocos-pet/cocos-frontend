import { semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "99",

  width: "100%",
  maxWidth: "76.8rem",
  margin: "0 auto",
  height: "100%",
  backgroundColor: "rgba(34, 34, 34, 0.2)",
});

export const bottomSheet = style({
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",

  display: "flex",
  flexDirection: "column",
  zIndex: "99",

  width: "100%",
  maxWidth: "76.8rem",
  margin: "0 auto",

  height: "90vh",
  borderRadius: "20px 20px 0px 0px",
  backgroundColor: "white",
});

export const bottomTabBar = style({
  width: "100%",
  height: "24px",
  padding: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const bar = style({
  width: "8rem",
  height: "4px",
  backgroundColor: semanticColor.line.heavy,
});
