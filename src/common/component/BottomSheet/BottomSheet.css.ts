import { semanticColor } from "@style/styles.css";
import { style } from "@vanilla-extract/css";
import { contentMaxWidth, media } from "@style/breakpoints";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: "99",

  width: "100%",
  maxWidth: contentMaxWidth.mobile,
  height: "100%",
  backgroundColor: "rgba(34, 34, 34, 0.2)",
  "@media": {
    [media.tablet]: { maxWidth: contentMaxWidth.tablet },
    [media.laptop]: { maxWidth: contentMaxWidth.laptop },
  },
});

export const bottomSheet = style({
  position: "absolute",
  bottom: "0",

  display: "flex",
  flexDirection: "column",
  zIndex: "99",

  width: "100%",
  height: "90vh",
  borderRadius: "20px 20px 0px 0px",
  backgroundColor: "white",
});

export const bottomTabBar = style({
  width: "100%",
  height: "24px",
  padding: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const bar = style({
  width: "8rem",
  height: "4px",
  backgroundColor: semanticColor.line.heavy,
});
