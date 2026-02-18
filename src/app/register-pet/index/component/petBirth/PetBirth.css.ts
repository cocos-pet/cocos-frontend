import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const layout = style({
  display: "flex",
  flexDirection: "column",
  padding: "8rem 2rem",
  gap: "7.2rem",
});

export const gap = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const centerLayout = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
});

export const inputWithError = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const ageFontStyle = style([font.body01, {}]);

export const errorText = style([
  font.caption01,
  {
    color: color.red.warning_red200,
    marginTop: "1rem",
  },
]);

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
