import { color, font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

// Flex layout
export const flexColumn = style({
  display: "flex",
  flexDirection: "column",
});

export const flexRow = style({
  display: "flex",
  flexDirection: "row",
});

export const alignCenter = style({
  alignItems: "center",
});

export const alignFlexStart = style({
  alignItems: "flex-start",
});

export const justifyCenter = style({
  justifyContent: "center",
});

export const justifySpaceBetween = style({
  justifyContent: "space-between",
});

export const fullWidth = style({
  width: "100%",
});

export const alignSelfStretch = style({
  alignSelf: "stretch",
});

export const gap4 = style({
  gap: "0.4rem",
});

export const gap6 = style({
  gap: "0.6rem",
});

export const gap8 = style({
  gap: "0.8rem",
});

export const gap12 = style({
  gap: "1.2rem",
});

export const gap16 = style({
  gap: "1.6rem",
});

// Typography
export const textCenter = style({
  textAlign: "center",
});

export const textLeft = style({
  textAlign: "left",
});

export const noWrap = style({
  whiteSpace: "nowrap",
});

export const breakWord = style({
  wordBreak: "break-word",
  whiteSpace: "normal",
});

export const ellipsis = style({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const multilineEllipsis = (lines: number) =>
  style({
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  });

// Border styles
export const roundedFull = style({
  borderRadius: "999px",
});

export const rounded8 = style({
  borderRadius: "8px",
});

export const rounded16 = style({
  borderRadius: "16px",
});

export const borderStrong = style({
  border: `1px solid ${semanticColor.line.strong}`,
});

export const borderHeavy = style({
  border: `1px solid ${semanticColor.line.heavy}`,
});

export const borderBottomHeavy = style({
  borderBottom: `1px solid ${semanticColor.line.heavy}`,
});

// Position
export const positionFixed = style({
  position: "fixed",
});

export const positionSticky = style({
  position: "sticky",
});

// Background
export const bgGray100 = style({
  background: color.gray.gray100,
});

export const bgGray200 = style({
  background: color.gray.gray200,
});

export const bgNeutralStrong = style({
  background: semanticColor.neutral.strong,
});

export const bgWhite = style({
  background: "white",
});

// Margin & Padding
export const padding16 = style({
  padding: "1.6rem",
});

export const paddingVertical16 = style({
  padding: "1.6rem 0",
});

export const margin16 = style({
  margin: "1.6rem",
});

export const marginTopBottom16 = style({
  margin: "1.6rem 0",
});

export const marginTop16 = style({
  marginTop: "1.6rem",
});

// Common element styles
export const profileImageBase = style({
  borderRadius: "999px",
  border: `1px solid ${semanticColor.line.strong}`,
  background: color.gray.gray100,
});

export const cardBase = style([borderStrong, rounded16, flexColumn, justifyCenter, alignCenter]);

// Common text styles
export const textContent = style({
  color: semanticColor.text.normal,
});

export const textAssistive = style({
  color: semanticColor.text.assistive,
});

export const accentWarning = style({
  color: semanticColor.accent.warning,
});

export const textAssistiveLight = style({
  color: semanticColor.text.assistiveLight,
});

export const textHeavy = style({
  color: semanticColor.text.heavy,
});

export const textDisabled = style({
  color: semanticColor.disable.text,
});

// Effects
export const hideScrollbar = style({
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const blurEffect = style({
  filter: "blur(6px)",
  pointerEvents: "none",
  touchAction: "none",
});
