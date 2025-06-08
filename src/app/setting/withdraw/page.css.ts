import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const withdrawBodyWrapper = style({
  display: "flex",
  width: "100%",
  padding: "2rem 2rem 0 2rem",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.2rem",
});

export const withdrawTitleWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.8rem",
});

export const withdrawTitle = style([
  font.heading02,
  {
    color: "black",
  },
]);

export const withdrawSubTitle = style([
  font.body01,
  {
    color: "black",
  },
]);

export const withdrawButtonWrapper = style({
  position: "fixed",
  bottom: "0",
  left: "0",

  display: "flex",
  width: "100%",
  maxWidth: "76.8rem",
  height: "8.8rem",
  padding: "1.2rem 2rem 3.2rem 2rem",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "1.2rem",
  flexShrink: "0",

  justifyContent: "center",
});
