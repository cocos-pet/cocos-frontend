import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import { contentMaxWidth, media, pagePadding } from "@style/breakpoints";

export const pageWrapper = style({
  position: "fixed",
  width: "100%",
  maxWidth: contentMaxWidth.mobile,
  left: "50%",
  transform: "translateX(-50%)",
  top: 0,
  bottom: 0,
  "@media": {
    [media.tablet]: { maxWidth: contentMaxWidth.tablet },
    [media.laptop]: { maxWidth: contentMaxWidth.laptop },
  },
});

export const searchBarContainer = style({
  margin: `1.6rem ${pagePadding.mobile} 2rem`,
  "@media": {
    [media.tablet]: { marginLeft: pagePadding.tablet, marginRight: pagePadding.tablet },
    [media.laptop]: { marginLeft: pagePadding.laptop, marginRight: pagePadding.laptop },
  },
});

export const reviewContainer = style({
  position: "relative",
  height: "100vh",
  overflow: "auto",
  paddingBottom: "10rem",
});

export const reviewList = style({
  height: "100%",
  overflowX: "hidden",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const headerContainer = style({
  width: "100%",
});

export const recommendHospital = style({
  marginTop: "2.4rem",
  padding: `0rem ${pagePadding.mobile}`,
  "@media": {
    [media.tablet]: { padding: `0rem ${pagePadding.tablet}` },
    [media.laptop]: { padding: `0rem ${pagePadding.laptop}` },
  },
});

export const recommendTitle = style([
  font.body01,
  {
    fontWeight: "600",
  },
]);

export const recommendTitleHighlight = style({
  color: color.primary.blue900,
});

export const recommendList = style({
  marginTop: "1.2rem",
  display: "flex",
  gap: "1.6rem",
  overflowX: "auto",
  marginBottom: "2.4rem",
  width: "100%",
  "::-webkit-scrollbar": {
    display: "none",
  },
  whiteSpace: "nowrap",
});

export const hospitalCard = style({
  padding: "1.6rem",
  border: `1px solid ${color.gray.gray200}`,
  borderRadius: "1.6rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  cursor: "pointer",
  minWidth: "30rem",
  whiteSpace: "nowrap",
});

export const hospitalTitleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  whiteSpace: "nowrap",
});

export const hospitalRank = style([
  font.heading03,
  {
    fontWeight: "600",
    color: color.primary.blue600,
  },
]);

export const hospitalName = style([font.heading03]);

export const hospitalAddress = style([
  font.body01,
  {
    color: color.gray.gray700,
    fontSize: "1.4rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  },
]);

// 배너 원본 이미지 비율(1340x400)에 맞춰 폭이 늘어나면 높이도 같이 늘어남
export const bannerWrapper = style({
  width: "100%",
  aspectRatio: "1340 / 400",
  borderRadius: "1.6rem",
  overflow: "hidden",
});

export const bannerContainer = style({
  objectFit: "cover",
});

export const hospitalListText = style([
  font.label01,
  {
    fontWeight: "500",
    marginLeft: pagePadding.mobile,
    marginTop: "2.4rem",
    "@media": {
      [media.tablet]: { marginLeft: pagePadding.tablet },
      [media.laptop]: { marginLeft: pagePadding.laptop },
    },
  },
]);

export const hospitalWrapper = style({
  padding: "0 2rem",
});

// pageWrapper가 이미 breakpoint에 맞춰 너비를 갖고 있어 별도 maxWidth 불필요
export const navWrapper = style({
  position: "fixed",
  bottom: 0,
  zIndex: 10,
  backgroundColor: "#fff",
  width: "100%",
});

export const floatBtnWrapper = style({
  position: "fixed",
  bottom: "9.6rem",
  right: pagePadding.mobile,
  zIndex: 1000,
  display: "flex",
  justifyContent: "flex-end",
  "@media": {
    [media.tablet]: { right: pagePadding.tablet },
    [media.laptop]: { right: pagePadding.laptop },
  },
});
