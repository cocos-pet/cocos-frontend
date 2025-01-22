import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const settingWrapper = style({
  display: "flex",
  width: "100%",
  padding: "2rem 2rem 0 2rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "3.2rem",
});

export const myprofileSettingWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.2rem",
  alignSelf: "stretch",
});

export const accountWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",
  alignSelf: "stretch",
});

export const myprofileText = style([
  font.label01,
  {
    alignSelf: "stretch",
    color: semanticColor.text.assistive,
  },
]);

export const editMyProfile = style({
  display: "flex",
  width: "100%",
  padding: "0.6rem 0rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  alignSelf: "stretch",
  borderRadius: "8px",
});

export const myProfileSpan = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

export const myProfileSpanText = style([
  font.body01,
  {
    color: semanticColor.text.normal,
  },
]);
