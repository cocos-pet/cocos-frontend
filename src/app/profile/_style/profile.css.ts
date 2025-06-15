import { color, font, semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import * as a from "./atomic.css";

/* ------------------- 프로필 섹션 스타일 ------------------- */
export const myProfileWrapper = style([
  a.fullWidth,
  a.flexRow,
  a.alignCenter,
  a.justifyCenter,
  {
    marginTop: "6.4rem",
    paddingTop: "2rem",
    paddingBottom: "3.2rem",
    backgroundColor: "white",
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

export const userProfile = style([a.flexColumn, a.justifyCenter, a.alignCenter, a.gap12, a.alignSelfStretch]);

export const profileImage = style([
  a.profileImageBase,
  {
    width: "4.8rem",
    height: "4.8rem",
  },
]);

export const userProfileText = style([font.heading02, a.textCenter, a.alignSelfStretch, a.textContent]);

/* ------------------- 반려동물 프로필 스타일 ------------------- */
export const animalProfileWrapper = style([a.flexRow, a.alignCenter, a.justifyCenter, a.gap12, a.alignSelfStretch]);

export const animalImage = style([
  a.profileImageBase,
  {
    width: "3.2rem",
    height: "3.2rem",
  },
]);

export const animalProfileTextWrapper = style([
  a.flexColumn,
  a.alignFlexStart,
  a.gap4,
  {
    flex: "1 0 0",
  },
]);

export const animalMainText = style([font.body01, a.alignSelfStretch, a.textContent]);

export const animalSubText = style([font.label01, a.alignSelfStretch, a.textAssistive, a.breakWord]);

export const spanNoWrap = style([
  {
    display: "inline-block",
    whiteSpace: "nowrap",
  },
]);

export const textDivider = style({
  color: color.gray.gray600,
});

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
  a.positionSticky,
  a.fullWidth,
  {
    top: "6.4rem",
    paddingTop: "1.2rem",
    alignSelf: "stretch",
    borderBottom: `1px solid ${semanticColor.line.strong}`,
    height: "5.6rem",
    backgroundColor: "white",
    zIndex: 10,
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

/* ------------------- 프로필 컨텐츠 스타일 ------------------- */
export const contentWrapper = style([a.flexColumn, a.justifyCenter, a.alignCenter, a.marginBottom80]);

export const mypagecontent = style([a.fullWidth, a.marginTop16]);

export const mypageCommentcontent = style([a.fullWidth]);

/* ------------------- 프로필 댓글 스타일 ------------------- */
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
