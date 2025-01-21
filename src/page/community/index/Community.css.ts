import { style } from "@vanilla-extract/css";

export const communityContainer = style({
  maxWidth: "76.8rem",
  width: "100%",
  margin: "0 auto",
  position: "relative",
});

export const communityHeader = style({
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "#fff",
  zIndex: 1,
});

export const bannerContainer = style({
  marginTop: "7.4rem",
});

export const communityFooter = style({
  position: "fixed",
  bottom: 0,
  zIndex: 10,
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "76.8rem",
});

export const postContainer = style({
  marginBottom: "10rem",
});

export const btnContainer = style({
  position: "fixed",
  bottom: "10.8rem",
  right: "max(2.8rem, calc((100% - 76.8rem) / 2 + 2.8rem))",
  display: "flex",
  alignItems: "flex-end",
});
