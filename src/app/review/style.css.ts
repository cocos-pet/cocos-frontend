import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const searchBarContainer = style({
  margin: "1.6rem 2rem 2rem",
});

export const reviewContainer = style({
  position: "relative",
  height: "100vh",
  overflow: "auto",
  paddingBottom: "8rem",
});

export const reviewList = style({
  height: "100%",
  overflow: "auto",
});

export const headerContainer = style({
  width: "100%",
});

export const recommendHospital = style({
  marginTop: "2.4rem",
  padding: "0rem 2rem",
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

export const bannerContainer = style({});

export const hospitalListText = style([
  font.label01,
  {
    fontWeight: "500",
    marginLeft: "2rem",
    marginTop: "2.4rem",
  },
]);

export const hospitalWrapper = style({
  padding: "0 2rem",
});

export const navWrapper = style({
  position: "fixed",
  bottom: 0,
  zIndex: 10,
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "76.8rem",
});

export const floatBtnWrapper = style({
  position: "fixed",
  bottom: "9.6rem",
  right: "2rem",
  zIndex: 1000,
  display: "flex",
  justifyContent: "flex-end",
});
