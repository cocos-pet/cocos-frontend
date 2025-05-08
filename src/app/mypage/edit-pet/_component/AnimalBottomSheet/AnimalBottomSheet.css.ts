import {color} from "@style/styles.css";
import {style} from "@vanilla-extract/css";

export const selectedZone = style({
  display: "flex",
  width: "100%",
  minHeight: "6.4rem",
  padding: "1.2rem 2rem",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",

  whiteSpace: "nowrap",
  overflowX: "scroll",
  gap: "1rem",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
});

export const categoryZone = style({
  display: "flex",
  width: "100%",
  minHeight: "5.6rem",
  paddingTop: "1.1rem",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",

  whiteSpace: "nowrap",
  overflowX: "scroll",

  borderBottom: `1px solid ${color.gray.gray200}`,
});

export const bodyZone = style({
  position: "relative",
  padding: "0 2rem",
  width: "100%",
});

export const buttonWrapper = style({
  position: "absolute",
  bottom: "0",

  display: "flex",
  width: "100%",
  height: "8.8rem",
  padding: "1.2rem 2rem 3.2rem 2rem",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,

  backgroundColor: "white",
});
