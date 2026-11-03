import { style } from "@vanilla-extract/css";
import { media, pagePadding } from "@style/breakpoints";
import { fixedContentWidth } from "@style/layout.css";

export const mainContainer = style({
  width: "100%",
  margin: "0 auto",
  position: "relative",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "6.4rem",
      background: "linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
      zIndex: 1000,
    },
  },
});

export const headerContainer = style({
  padding: `0rem ${pagePadding.mobile}`,
  zIndex: 1000,
  width: "100%",
  transform: "translateY(-50%)",
  "@media": {
    [media.tablet]: { padding: `0 ${pagePadding.tablet}` },
    [media.laptop]: { padding: `0 ${pagePadding.laptop}` },
  },
});

export const alarmButton = style({
  position: "absolute",
  top: "2rem",
  right: pagePadding.mobile,
  zIndex: 1100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  "@media": {
    [media.tablet]: { right: pagePadding.tablet },
    [media.laptop]: { right: pagePadding.laptop },
  },
});

export const alarmUnreadBadge = style({
  position: "absolute",
  padding: "0.3rem 0.4rem 1.5rem 1.4rem",
});

/** HotPost + HotHospital wrapper — 375·1024px는 세로(1열), 1440px부터 가로 2열로 전환 */
export const contentRow = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  "@media": {
    [media.tablet]: {
      gap: "2.4rem",
      padding: `0 ${pagePadding.tablet}`,
    },
    [media.laptop]: {
      gridTemplateColumns: "1fr 1fr",
      gap: "3.2rem",
      padding: `0 ${pagePadding.laptop}`,
    },
  },
});

/**
 * 가로 2열 배치일 땐 중복되는 구분선을 숨긴다.
 * Symptom 아래 Divider(화면 끝까지 꽉 차는 형태)와 폭이 똑같아 보이도록,
 * 1024px부터 생기는 contentRow 패딩만큼 음수 마진으로 상쇄해 항상 꽉 차게 유지한다.
 */
export const dividerInRow = style({
  display: "block",
  "@media": {
    [media.tablet]: { margin: `0 -${pagePadding.tablet}` },
    [media.laptop]: { display: "none" },
  },
});

/** Nav를 하단에 고정 (Footer는 일반 흐름으로 되돌림) */
export const navWrapper = style([
  fixedContentWidth,
  {
    position: "fixed",
    bottom: 0,
    zIndex: 100,
  },
]);
