import {style} from "@vanilla-extract/css";
import { contentMaxWidth, media } from "@style/breakpoints";

export const communityContainer = style({
  width: "100%",
  position: "relative",
});

// 고정 헤더는 뷰포트 전체 폭이라 콘텐츠 바깥 여백이 html의 레터박스 배경(#FBFBFB)과 같아야 함
// (안쪽 HeaderNav 자체는 자기 폭만큼 흰 배경을 따로 그림)
export const communityHeader = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#FBFBFB",
  zIndex: 10,
});

export const bannerContainer = style({
  marginTop: "7.4rem",
});

export const communityFooter = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 10,
  backgroundColor: "#FBFBFB",
  width: "100%",
});

export const postContainer = style({
  marginBottom: "10rem",
});

// floatingBtn을 컨텐츠 최대너비 기준 우측 하단에 고정 (뷰포트가 넓어져도 콘텐츠 안쪽에 위치)
export const btnContainer = style({
  position: "fixed",
  bottom: "10.8rem",
  right: `max(2.8rem, calc((100% - ${contentMaxWidth.mobile}) / 2 + 2.8rem))`,
  display: "flex",
  alignItems: "flex-end",
  "@media": {
    [media.tablet]: { right: `max(2.8rem, calc((100% - ${contentMaxWidth.tablet}) / 2 + 2.8rem))` },
    [media.laptop]: { right: `max(2.8rem, calc((100% - ${contentMaxWidth.laptop}) / 2 + 2.8rem))` },
  },
});

export const categoryContainer = style({
  padding: "2rem 0rem 2rem 0rem",
});
