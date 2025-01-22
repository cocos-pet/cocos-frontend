import { color, font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const petEditWrapper = style({
  display: "flex",
  width: "100%",
  padding: "2rem 0rem 7.2rem 0rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3.2rem",
});

export const profileInfo = style({
  display: "flex",
  padding: "0rem 2rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",
  alignSelf: "stretch",
});

export const defaultInfo = style({
  display: "flex",
  padding: "0rem 2rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.2rem",
  alignSelf: "stretch",
});

export const knownSymptoms = style({
  display: "flex",
  padding: "0rem 2rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.2rem",
  alignSelf: "stretch",
});

export const knownDisease = style({
  display: "flex",
  padding: "0rem 2rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.2rem",
  alignSelf: "stretch",
});

export const profileImage = style({
  width: "7.2rem",
  height: "7.2rem",
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",

  borderRadius: "999px",
  border: `1px solid ${semanticColor.line.strong}`,
  background: color.gray.gray100,
});

export const nicknameWrapper = style([
  font.heading02,
  {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",

    color: semanticColor.text.normal,
  },
]);

export const defaultText = style([
  font.label01,
  {
    alignSelf: "stretch",
    color: semanticColor.text.assistive,
  },
]);

export const defaultInfoListWrapper = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2rem",
});

export const defaultInfoList = style({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
  alignSelf: "stretch",
});

export const defaultInfoListLeft = style([
  font.body01,
  {
    width: "10rem",
    color: semanticColor.text.assistive,
  },
]);

export const defaultInfoListRight = style([
  font.body01,
  {
    display: "flex",
    padding: "0.6rem 0rem",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "0.6rem",
    flex: "1 0 0",

    color: semanticColor.text.normal,
  },
]);

export const chipContainer = style({
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  gap: "1.2rem",
  alignSelf: "stretch",
  flexWrap: "wrap",
});

export const nameInput = style([
  font.heading02,
  {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",

    color: semanticColor.text.normal,

    textAlign: "center",

    border: "none",
    borderBottom: "1px solid #ccc",
    padding: "0.2rem 0",
    outline: "none",

    ":focus": { borderBottom: `1px solid ${semanticColor.primary.normal}` },
  },
]);

export const errorLayout = style({
  marginTop: "0.8rem",
});
