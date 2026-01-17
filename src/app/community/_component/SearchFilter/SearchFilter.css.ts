import { style } from "@vanilla-extract/css";
import { font, semanticColor } from "@style/styles.css.ts";

export const filterButtonContainer = style({
  padding: "0.6rem 1.4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.6rem",
  borderRadius: "0.8rem",
  backgroundColor: semanticColor.neutral.strong,
});

export const filterText = style([
  font.body01,
  {
    color: semanticColor.text.assistive,
  },
]);

export const selectedChipsContainer = style({
  width: "calc(100vw - 2rem)",
  paddingRight: "2rem",
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  overflow: 'hidden',
  whiteSpace: "nowrap",
  overflowX: "scroll",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
});

export const fillterIcon = style({
  flexShrink: 0,
});