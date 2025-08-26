import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const backgroundColor = style({
  width: "100%",
  height: "100dvh",
  backgroundColor: color.gray.gray100,
});

export const TopLayout = style({
  padding: "1.6rem 2rem 0",
  backgroundColor: color.gray.gray000,
});

export const img = style({
  width: "8rem",
  height: "6rem",
});

export const titleBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const title = style([
  font.heading01,
  {
    color: color.gray.gray900,
    marginTop: "2rem",
  },
]);

export const docs = style([
  font.body01,
  {
    color: color.gray.gray800,
  },
]);

export const TapBox = style({
  display: "flex",
  width: "100%",
  minHeight: "5.6rem",
  paddingTop: "1.1rem",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",

  whiteSpace: "nowrap",

  borderBottom: `1px solid ${color.gray.gray200}`,
  backgroundColor: color.gray.gray000,
});

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
