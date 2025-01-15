import { style } from "@vanilla-extract/css";
import { semanticColor, font } from "@style/styles.css";

export const headerContainer = style({
  position: "relative",
  width: "37.5rem",
  height: "20rem",
  alignItems: "center",
  overflow: "hidden",
});

export const textContainer = style({
  width: "19.2rem",
  marginLeft: "2rem",
  position: "absolute",
  top: "10%",
  zIndex: 2,
  color: semanticColor.text.inverse,
  textAlign: "left",
});

export const headerText = style([
  {
    marginTop: "3.3rem",
  },
  font.heading02,
  {
    color: semanticColor.text.inverse,
    letterSpacing: "-0.18rem",
  },
]);

export const textDetail = style([
  font.label01,
  {
    fontWeight: "500",
    color: semanticColor.text.inverse,
  },
]);

export const img = style({
  position: "absolute",
  width: "10.8945rem",
  height: "15.2409rem",
  top: "4.3rem",
  right: "2rem",
  zIndex: 3,
  backgroundColor: "#f7f7f7",
  borderRadius: "12px",
});
