import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const align = style({
  display: "flex",
  alignItems: "center",
});

export const title = style([
  font.body01,
  {
    color: color.gray.gray900,
  },
]);

export const optional = style([
  font.caption01,
  {
    color: color.gray.gray700,
  },
]);

export const imgLayout = style({
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  height: "104px",

  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // IE 10+
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none", // Chrome, Safari, Opera
    },
  },
});

export const imgBox = style({
  display: "flex",
  gap: "1.2rem",
  minWidth: "max-content",
});
