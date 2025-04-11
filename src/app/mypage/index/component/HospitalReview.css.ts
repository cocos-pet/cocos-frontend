import { color, font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  padding: "1.6rem 0",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "16px",
  alignSelf: "stretch",
});

export const visitWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const visitDate = style([
  font.label01,
  {
    display: "flex",
    gap: "1.6rem",
    alignItems: "center",
    alignSelf: "stretch",
    color: semanticColor.text.assistive,
    flexShrink: 0,
  },
]);

export const hospitalNameBox = style({
  display: "flex",
  padding: "1.6rem",
  gap: "0.4rem",
  alignSelf: "stretch",
  flexDirection: "column",

  borderRadius: "8px",
  border: "1px solid var(--Line-strong, #F0F0F0)",
  background: semanticColor.neutral.strong,
});

export const hospitalName = style([
  font.heading03,
  {
    color: semanticColor.text.normal,
  },
]);

export const address = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
  },
]);

export const openOrClose = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
  },
]);

export const ReviewArea = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  alignSelf: "stretch",
});

export const content = style([
  font.body01,
  {
    alignSelf: "stretch",
    color: semanticColor.text.normal,
    display: "-webkit-box",
    WebkitLineClamp: 2, // 보여줄 줄 수
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
]);

export const reviewCategory = style([font.body01, { color: semanticColor.text.assistive }]);

export const reviewChipArea = style({
  display: "flex",
  alignItems: "flex-start",
  alignContent: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  flexWrap: "wrap",
});

export const categoryAndChip = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const animalDefaultInfoBox = style({
  display: "flex",
  padding: "16px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  borderRadius: "8px",
  border: `1px solid ${semanticColor.line.heavy}`,
});

export const infoLineBox = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
});

export const infoLineCategory = style([
  font.body01,
  {
    color: semanticColor.text.assistive,
  },
]);

export const infoLineContent = style([
  font.body01,
  {
    color: semanticColor.text.normal,
  },
]);

export const ReviewChipBottomArea = style({
  display: "flex",
  alignItems: "flex-start",
  alignContent: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  flexWrap: "wrap",
});

export const pictureArea = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  overflowX: "scroll",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const pic = style({
  display: "flex",
  width: "7.6rem",
  height: "7.6rem",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  background: color.gray.gray200,
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

export const blurred = style({
  filter: "blur(6px)",
  pointerEvents: "none",
  touchAction: "none",
});
