import { font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const commentWrapper = style({
  display: "flex",
  width: "33.5rem",
  padding: "1.2rem 0rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.4rem",
  borderBottom: `1px solid ${semanticColor.line.heavy}`,

  wordWrap: "break-word", 
  whiteSpace: "pre-wrap", 
});

export const timeText = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  alignSelf: "stretch",
});

export const contentText = style([
  font.heading03,
  {
    color: semanticColor.text.normal,
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignSelf: "stretch",
  },
]);

export const mentionedNickname = style([
  font.heading03,
  {
    color: semanticColor.text.heavy,
    flexShrink: 0,
  },
]);

export const wherePostText = style([
  font.label01,
  {
    display: "flex",
    width: "33.5rem",
    height: "1.6rem",
    alignSelf: "stretch",
    color: semanticColor.text.assistiveLight,
  },
]);

export const whereText = style({
  display: "inline-block", //ellipsis 적용을 위해 필요

  maxWidth: "26.8rem",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});
