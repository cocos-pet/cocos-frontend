import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const wrapper = style({
  width: "100%",
  height: "100dvh",
  backgroundColor: color.gray.gray100,
});

export const contentLayout = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
  padding: "2rem 2rem 10.8rem",
});

export const docs = style([
  font.body01,
  {
    fontWeight: 500,
    color: color.gray.gray600,
  },
]);

export const btnLayout = style({
  maxWidth: "76.8rem",
  width: "100%",
  position: "fixed",
  bottom: 0,

  display: "grid",
  gridTemplateColumns: "9.6rem calc(100% - 10.8rem)",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
  backgroundColor: color.gray.gray000,
});
