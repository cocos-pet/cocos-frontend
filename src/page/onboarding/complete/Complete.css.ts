import { style } from "@vanilla-extract/css";

export const backGround = style({
  height: "100vh",
  background: "linear-gradient(180deg, #DEFEFF 0%, #FFF 36.13%)",
});

export const layout = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.5rem",
  padding: "7.2rem 2rem 6rem 2rem",
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
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
});
