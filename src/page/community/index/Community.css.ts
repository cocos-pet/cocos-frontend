import { style } from "@vanilla-extract/css";

export const communityContainer = style({
  maxWidth: "37.5rem",
  margin: "0 auto",
  position: "relative",
});

export const communityHeader = style({
  position: "fixed",
  top: 0,
  width: "37.5rem",
  backgroundColor: "#fff",
  height: "6.4rem",
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
  width: "37.5rem",
});

export const postContainer = style({
  marginBottom: "4rem",
});

export const btnContainer = style({
  position: "fixed",
  bottom: "6.5rem",
  right: "2rem",
  zIndex: 20,
});
