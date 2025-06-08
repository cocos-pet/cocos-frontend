"use client";

import { color, font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const profileEditWrapper = style({
  display: "flex",
  width: "100%",
  paddingTop: "2rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
});

export const profile = style({
  width: "7.2rem",
  height: "7.2rem",
  borderRadius: "999px",
  border: `1px solid ${semanticColor.line.strong}`,
  background: color.gray.gray100,
});

export const profileContent = style({
  display: "flex",
  padding: "0rem 2rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.2rem",
  alignSelf: "stretch",
});

export const nicknameText = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
    alignSelf: "stretch",
  },
]);

export const userNickname = style([
  font.heading02,
  {
    color: semanticColor.text.normal,
  },
]);

export const buttonWrapper = style({
  position: "fixed",
  bottom: "0",

  display: "flex",
  width: "100%",
  maxWidth: "76.8rem",
  height: "8.8rem",
  padding: "1.2rem ",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  flexShrink: "0",
});

export const profileEditContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
