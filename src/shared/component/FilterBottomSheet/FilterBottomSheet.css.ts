import { color } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const selectedZone = style({
  display: "flex",
  width: "100%",
  minHeight: "64px",
  padding: "12px 20px",
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
  minHeight: "56px",
  paddingTop: "11px",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",

  whiteSpace: "nowrap",
  overflowX: "scroll",

  borderBottom: `1px solid ${color.gray.gray200}`,
});

export const bodyZone = style({
  padding: "0 2rem",
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
});
