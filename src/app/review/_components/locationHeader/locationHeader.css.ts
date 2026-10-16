import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";
import { media, pagePadding } from "@style/breakpoints";

export const locationHeader = style({
  height: "6.4rem",
  display: "flex",
  alignItems: "center",
  padding: "0 2rem",
});

export const locationWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
});

export const locationText = style([
  font.body01,
  {
    color: color.gray.gray900,
  },
]);

export const location = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `1.2rem ${pagePadding.mobile}`,
  backgroundColor: "white",
  "@media": {
    [media.tablet]: { padding: `1.2rem ${pagePadding.tablet}` },
    [media.laptop]: { padding: `1.2rem ${pagePadding.laptop}` },
  },
});

export const locationButton = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const locationContent = style({
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  marginRight: "0.4rem",
});
