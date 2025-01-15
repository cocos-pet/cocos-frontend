import { style } from "@vanilla-extract/css";

export const layout = style({
  display: "flex",
  flexDirection: "column",
  padding: "8rem 2rem",
  gap: "9rem",
});

export const imgStyle = style({
  width: "16.5rem",
  height: "9.3rem",
  marginBottom: "1.6rem",
});

export const btnWrapper = style({
  width: "100%",
  position: "fixed",
  bottom: 0,

  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
});

export const errorLayout = style({
  marginTop: "0.8rem",
});
