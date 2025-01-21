import { style } from "@vanilla-extract/css";

export const backGround = style({
  height: "100vh",
  background: "linear-gradient(180deg, #DEFEFF 0%, #FFF 36.13%)",
});

export const layout = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3.2rem",
  padding: "7.2rem 2rem 0 2rem",
});
export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "0.8rem",
});
export const btnWrapper = style({
  maxWidth: "76.8rem",
  width: "100%",
  position: "fixed",
  bottom: 0,
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
});
