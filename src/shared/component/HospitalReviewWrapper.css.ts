import { font, semanticColor, color } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import * as a from "@shared/style/atomic.css";

export const nothingContent = style([
  font.body01,
  a.flexColumn,
  a.justifyCenter,
  a.alignCenter,
  a.textCenter,
  {
    width: "33.5rem",
    height: "32rem",
    color: semanticColor.disable.text,
  },
]);
/* ------------------- 병원 후기 스타일 ------------------- */
export const reviewContainer = style([
  a.fullWidth,
  a.flexColumn,
  a.justifyCenter,
  a.alignFlexStart,
  a.gap16,
  a.paddingVertical16,
]);

export const visitWrapper = style([a.fullWidth, a.justifySpaceBetween, a.flexRow]);

export const visitDate = style([
  font.label01,
  a.flexRow,
  a.alignCenter,
  a.textAssistive,
  {
    gap: "1.6rem",
    alignSelf: "stretch",
    flexShrink: 0,
  },
]);

export const hospitalNameBox = style([
  a.flexColumn,
  a.gap4,
  a.alignSelfStretch,
  a.padding16,
  a.rounded8,
  a.borderStrong,
  a.bgNeutralStrong,
]);

export const hospitalName = style([font.heading03, a.textContent]);

export const address = style([font.label01, a.textAssistive]);

export const openOrClose = style([font.label01, a.textAssistive]);

export const reviewArea = style([a.flexColumn, a.alignFlexStart, a.gap16, a.alignSelfStretch]);

export const reviewContent = style([font.body01, a.textContent, a.alignSelfStretch]);

export const reviewEllipsisContent = style([
  font.body01,
  a.textContent,
  a.alignSelfStretch,
  {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
]);

export const reviewCategory = style([font.body01, a.textAssistive]);

export const reviewChipArea = style([
  a.flexRow,
  a.alignFlexStart,
  a.gap8,
  a.alignSelfStretch,
  {
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
]);

export const categoryAndChip = style([a.flexColumn, a.gap8]);

export const animalDefaultInfoBox = style([
  a.flexColumn,
  a.alignFlexStart,
  a.gap8,
  a.alignSelfStretch,
  a.padding16,
  a.rounded8,
  a.borderHeavy,
]);

export const infoLineBox = style([a.flexRow, a.justifySpaceBetween, a.alignCenter, a.alignSelfStretch]);

export const infoLineCategory = style([font.body01, a.textAssistive]);

export const infoLineContent = style([font.body01, a.textContent]);

export const reviewChipBottomArea = style([
  a.flexRow,
  a.alignFlexStart,
  a.gap8,
  a.alignSelfStretch,
  {
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
]);

export const pictureArea = style([
  a.fullWidth,
  a.flexRow,
  a.alignCenter,
  a.gap8,
  a.hideScrollbar,
  {
    overflowX: "scroll",
  },
]);

export const pic = style([
  a.flexRow,
  a.justifyCenter,
  a.alignCenter,
  a.rounded8,
  a.bgGray200,
  {
    width: "7.6rem",
    height: "7.6rem",
  },
]);
export const blurred = style([a.blurEffect]);

// 드롭다운 스타일
export const dropdownContainer = style([
  a.flexColumn,
  a.alignSelfStretch,
  {
    position: "absolute",
    top: "2.8rem",
    right: "0",
    width: "18.4rem",
    height: "auto",
    borderRadius: "1.2rem",
    zIndex: 3,
  },
]);
export const dropdownItem = style([
  font.body01,
  a.accentWarning,
  {
    padding: "1.2rem 3.2rem",
    width: "100%",
    height: "5.6rem",
    display: "flex",
    alignItems: "center",
    borderRadius: "1.2rem",
    backgroundColor: "white",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
  },
]);

export const loadMoreContainer = style([
  a.flexRow,
  a.justifyCenter,
  a.alignCenter,
  a.fullWidth,
  a.padding16,
  font.label01,
  a.textAssistive,
]);
