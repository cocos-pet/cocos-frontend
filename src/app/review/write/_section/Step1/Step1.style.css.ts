import { style } from "@vanilla-extract/css";
import { color } from "@style/styles.css";

export const headerContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  zIndex: 20,
});

export const preventScroll = style({
  height: "100vh",
  overflow: "hidden",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",

  width: "100%",
  height: "calc(100vh - 15.2rem)",
  marginTop: "6.4rem",
  padding: "2rem",
  backgroundColor: color.gray.gray100,

  overflow: "scroll",
  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // IE 10+
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none", // Chrome, Safari
    },
  },
});

export const buttonContainer = style({
  position: "sticky",
  bottom: "0rem",
  left: "0",
  width: "100%",
  padding: "1.2rem 2rem 3.2rem 2rem",

  backgroundColor: color.gray.gray000,
  overflow: "scroll",
});
