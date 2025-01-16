import { style } from "@vanilla-extract/css";
import { font } from "@style/styles.css";

export const layout = style({
  display: "flex",
  flexDirection: "column",
  padding: "8rem 2rem",
  gap: "7.2rem",
});

export const centerLayout = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
});

export const errorLayout = style({
  marginTop: "0.8rem",
});

export const ageFontStyle = style([font.body01, {}]);

export const btnWrapper = style({
  maxWidth: "76.8rem",
  width: "100%",
  position: "fixed",
  bottom: 0,

  display: "grid",
  gridTemplateColumns: "9.6rem calc(100% - 10.8rem)",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
});
