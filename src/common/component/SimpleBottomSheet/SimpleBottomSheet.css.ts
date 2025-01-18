import { style } from "@vanilla-extract/css";
import { color, font, semanticColor } from "@style/styles.css";

export const overlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: "99",

  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(34, 34, 34, 0.2)",
});

export const bottomSheetContainer = style({
  position: "absolute",
  bottom: "0",

  display: "flex",
  width: "37.5rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px 20px 0px 0px",

  backgroundColor: "white",
});

export const bottomSheetHeader = style({
  display: "flex",
  padding: "1.2rem",
  width: "inherit",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",
});

export const contentContainer = style({
  display: "flex",
  width: "33.5rem",
  padding: "2rem 0rem 3.2rem 0rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2.4rem",
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.2rem",
});

export const content = style([
  font.heading03,
  {
    alignSelf: "stretch",
    color: semanticColor.text.normal,
    letterSpacing: "-0.16px",
  },
]);

export const subContent = style([
  font.label01,
  {
    alignSelf: "stretch",
    color: color.gray.gray500,
  },
]);

export const buttonContainer = style({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  gap: "1rem",
  alignSelf: "stretch",
});
