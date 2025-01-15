import { color, font, semanticColor } from "@style/styles.css";
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

export const loginProfile = style({
  display: "flex",
  width: "33.5rem",
  padding: "1.6rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",

  borderRadius: "16px",
  border: `1px solid ${semanticColor.line.strong}`,
});

export const userProfile = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",
  alignSelf: "stretch",
});

export const profileImage = style({
  width: "4.8rem",
  height: "4.8rem",
  borderRadius: "999px",
  border: `1px solid ${semanticColor.line.strong}`,
  background: color.gray.gray100,
});

export const userProfileText = style([
  font.heading02,
  {
    alignSelf: "stretch",
    color: semanticColor.text.normal,
    textAlign: "center",
  },
]);

export const myPageContentWrapper = style({
  display: "flex",
  width: "37.5rem",
  minHeight: "30.6rem",
  height: "auto",

  //overflowY: "hidden",
  flexDirection: "column",
  alignItems: "center",

  //backgroundColor: "aliceblue",
  //border: "1px solid black",
});

export const contentHeaderWrapper = style({
  position: "sticky",
  top: "6.4rem",

  display: "flex",
  paddingTop: "1.2rem",
  alignItems: "center",
  alignSelf: "stretch",
  borderBottom: `1px solid ${semanticColor.line.strong}`,

  width: "37.5rem",
  height: "5.6rem",

  backgroundColor: "white",
});

export const contentBody = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flexStart",

  width: "33.5rem",
});

export const nothingContent = style([
  font.body01,
  {
    display: "flex",
    width: "33.5rem",
    height: "32rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    color: semanticColor.disable.text,
    textAlign: "center",
  },
]);

export const animalProfileWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",
  alignSelf: "stretch",
});

export const animalImage = style({
  width: "3.2rem",
  height: "3.2rem",
  borderRadius: "999px",
  border: `1px solid ${semanticColor.line.strong}`,
  background: color.gray.gray100,
});

export const animalProfileTextWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.4rem",
  flex: "1 0 0",
});

export const animalMainText = style([
  font.body01,
  {
    alignSelf: "stretch",
    color: semanticColor.text.normal,
  },
]);

export const animalSubText = style([
  font.label01,
  {
    alignSelf: "stretch",
    color: semanticColor.text.assistive,
  },
]);
