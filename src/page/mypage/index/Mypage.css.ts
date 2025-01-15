import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const myProfileWrapper = style({
  width: "100%",
  paddingTop: "2rem",
  paddingBottom: "3.2rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
});

export const unloginProfile = style({
  width: "33.5rem",
  minHeight: "13.8rem",
  padding: "1.6rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",

  borderRadius: "16px",
  border: `1px solid ${semanticColor.line.strong}`,
});

export const pleaseLoginText = style([
  font.heading02,
  {
    alignSelf: "stretch",
    color: semanticColor.text.assistive,
    width: "100%",
    minHeight: "5rem",
  },
]);

export const loginProfile = style({});

export const myPageContentWrapper = style({
  position: "sticky",
  top: "6.4rem",

  display: "flex",
  width: "37.5rem",
  minHeight: "30.6rem",
  height: "70rem",

  //overflowY: "hidden",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: "aliceblue",

  border: "1px solid black",
});
