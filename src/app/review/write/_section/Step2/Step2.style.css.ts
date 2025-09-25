import { style } from "@vanilla-extract/css";
import { color } from "@style/styles.css";

export const backgroundColor = style({
  width: "100%",
  height: "100dvh",
  backgroundColor: color.gray.gray100,
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",

  height: "auto",
  padding: "2rem 2rem 9rem",
  overflow: "scroll",

  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // IE, Edge
  // Webkit 계열 (Chrome, Safari)
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const btnLayout = style({
  maxWidth: "76.8rem",
  width: "100%",
  position: "fixed",
  bottom: 0,

  display: "grid",
  gridTemplateColumns: "9.6rem calc(100% - 10.8rem)",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
  backgroundColor: color.gray.gray000,
});
