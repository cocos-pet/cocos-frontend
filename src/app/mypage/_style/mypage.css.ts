import { color, font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import * as a from "@shared/style/atomic.css";

/* ------------------- 프로필 섹션 스타일 ------------------- */
export const myProfileWrapper = style([
  a.fullWidth,
  a.flexRow,
  a.alignCenter,
  a.justifyCenter,
  {
    paddingTop: "8.4rem",
    paddingBottom: "3.2rem",
  },
]);

export const unloginProfile = style([
  a.cardBase,
  a.gap12,
  {
    width: "33.5rem",
    minHeight: "13.8rem",
    padding: "1.6rem",
  },
]);

export const pleaseLoginText = style([
  font.heading02,
  a.textCenter,
  {
    alignSelf: "stretch",
    color: semanticColor.text.assistive,
    width: "100%",
    minHeight: "5rem",
  },
]);

export const loginProfile = style([
  a.cardBase,
  a.gap12,
  {
    width: "33.5rem",
    padding: "1.6rem",
  },
]);

export const userProfile = style([
  a.flexColumn,
  a.justifyCenter,
  a.alignCenter,
  a.gap12,
  {
    alignSelf: "stretch",
  },
]);

export const profileImage = style([
  a.profileImageBase,
  {
    width: "4.8rem",
    height: "4.8rem",
  },
]);

export const userProfileText = style([
  font.heading02,
  a.textCenter,
  {
    alignSelf: "stretch",
    color: semanticColor.text.normal,
  },
]);

/* ------------------- 반려동물 프로필 스타일 ------------------- */
export const animalProfileWrapper = style([
  a.flexRow,
  a.alignCenter,
  a.justifyCenter,
  a.gap12,
  {
    alignSelf: "stretch",
  },
]);

export const animalImage = style([
  a.profileImageBase,
  {
    width: "3.2rem",
    height: "3.2rem",
  },
]);

export const animalProfileTextWrapper = style([
  a.flexColumn,
  {
    alignItems: "flex-start",
    gap: "0.4rem",
    flex: "1 0 0",
  },
]);

export const animalMainText = style([
  font.body01,
  a.textLeft,
  {
    alignSelf: "stretch",
    color: semanticColor.text.normal,
  },
]);

export const animalSubText = style([
  font.label01,
  a.textLeft,
  a.breakWord,
  {
    alignSelf: "stretch",
    color: semanticColor.text.assistive,
  },
]);

/* ------------------- 콘텐츠 섹션 스타일 ------------------- */
export const myPageContentWrapper = style([
  a.flexColumn,
  a.alignCenter,
  a.fullWidth,
  {
    minHeight: "30.6rem",
    height: "auto",
  },
]);

export const contentHeaderWrapper = style([
  a.flexRow,
  a.alignCenter,
  a.fullWidth,
  a.positionSticky,
  {
    top: "6.4rem",
    paddingTop: "1.2rem",
    alignSelf: "stretch",
    borderBottom: `1px solid ${semanticColor.line.strong}`,
    height: "5.6rem",
    backgroundColor: "white",
  },
]);

export const contentBody = style([
  a.flexColumn,
  {
    alignItems: "flexStart",
    width: "90%",
  },
]);

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

/* ------------------- 설정 버튼 스타일 ------------------- */
export const settingWrapper = recipe({
  variants: {
    isLogin: {
      true: { opacity: "1.0" },
      false: { opacity: "0.3" },
    },
  },
});

export const textDivider = style({
  color: color.gray.gray600,
});

export const spanNoWrap = style([
  a.noWrap,
  {
    display: "inline-block",
  },
]);

/* ------------------- 마이페이지 컨텐츠 스타일 ------------------- */
export const contentWrapper = style([
  a.flexColumn,
  a.justifyCenter,
  a.alignCenter,
  {
    margin: "0 0 8rem 0",
  },
]);

export const mypagecontent = style([a.fullWidth, a.marginTop16]);

export const commentcontentWrap = style([a.fullWidth]);

/* ------------------- 마이페이지 댓글 스타일 ------------------- */
export const commentWrapper = style([
  a.fullWidth,
  a.flexColumn,
  a.alignFlexStart,
  a.gap4,
  a.borderBottomHeavy,
  a.breakWord,
  {
    padding: "1.2rem 0rem",
  },
]);

export const timeText = style([a.flexRow, a.alignCenter, a.gap4, a.alignSelfStretch]);

export const contentText = style([
  font.heading03,
  a.textContent,
  a.flexRow,
  a.alignSelfStretch,
  {
    gap: "1rem",
  },
]);

export const mentionedNickname = style([
  font.heading03,
  a.textHeavy,
  {
    flexShrink: 0,
  },
]);

export const wherePostText = style([
  font.label01,
  a.alignSelfStretch,
  a.textAssistiveLight,
  {
    display: "flex",
    width: "33.5rem",
    height: "1.6rem",
  },
]);

export const whereText = style([
  a.ellipsis,
  {
    display: "inline-block",
    maxWidth: "26.8rem",
  },
]);

/* ------------------- 즐겨찾는 병원 스타일 ------------------- */
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
    height: "8rem",
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
