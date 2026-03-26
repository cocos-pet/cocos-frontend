import { style } from "@vanilla-extract/css";
import { color, font, semanticColor } from "@style/styles.css.ts";

export const listContainer = style({
  marginTop: "1.6rem",
});

export const alarmItem = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "1.2rem 2rem",
});

export const leftSection = style({
  minWidth: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  paddingBottom: "1.6rem",
  borderBottom: `1px solid ${color.gray.gray300}`,
});

export const leftSectionLast = style({
  borderBottom: "none",
});

export const metaRow = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const sourceText = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
  },
]);

export const sourceTextHighlight = style([
  font.label01,
  {
    color: semanticColor.text.heavy,
  },
]);

export const dot = style({
  width: "0.2rem",
  height: "0.2rem",
  borderRadius: "50%",
  backgroundColor: color.gray.gray500,
});

export const title = style([
  font.heading02,
  {
    color: semanticColor.text.normal,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
]);

export const description = style([
  font.body01,
  {
    color: semanticColor.text.assistive,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
]);

export const magazineTitle = style([
  font.heading02,
  {
    color: semanticColor.text.heavy,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
]);

export const myDescription = style([
  font.body01,
  {
    color: semanticColor.text.assistive,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
]);
