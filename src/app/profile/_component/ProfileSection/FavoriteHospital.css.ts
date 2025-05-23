import { font } from "@style/index";
import { style } from "@vanilla-extract/css";
import * as a from "@shared/style/atomic.css";

export const favoriteHospitalContainer = style([
  a.flexRow,
  a.fullWidth,
  a.justifySpaceBetween,
  a.alignCenter,
  a.padding16,
  a.rounded8,
  a.borderStrong,
  a.bgGray100,
  {
    height: "auto",
  },
]);

export const addBox = style([
  font.body01,
  a.textAssistive,
  a.flexRow,
  a.justifyCenter,
  a.alignCenter,
  a.gap6,
  a.fullWidth,
  {
    padding: "0.6rem 1.4rem",
  },
]);

export const redirectBox = style([a.flexRow, a.fullWidth, a.justifySpaceBetween, a.alignCenter, a.gap12]);

export const leftContentBox = style([
  a.flexColumn,
  a.alignFlexStart,
  a.gap4,
  {
    flex: "1 0 0",
  },
]);

export const leftTopText = style([font.label01, a.textHeavy, a.alignSelfStretch]);

export const leftMiddleText = style([font.heading03, a.textContent, a.alignSelfStretch]);

export const leftBottomText = style([font.label01, a.textAssistive, a.alignSelfStretch]);

export const rightContentBox = style([
  a.rounded8,
  {
    width: "4.8rem",
    height: "4.8rem",
  },
]);
