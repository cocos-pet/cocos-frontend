import { color, font, semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";
import { media, pagePadding } from "@style/breakpoints";

export const footerContainer = style({
  display: "flex",
  width: "100%",
  padding: "1.9rem 3.2rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1.2rem",
  backgroundColor: color.gray.gray100,
  "@media": {
    [media.tablet]: {
      padding: `2.4rem ${pagePadding.tablet}`,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    [media.laptop]: { padding: `3.2rem ${pagePadding.laptop}` },
  },
});

export const footerName = style([
  font.heading01,
  {
    letterSpacing: "-0.06rem",
    color: semanticColor.text.strong,
  },
]);

export const footerDetail = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
    letterSpacing: "-0.024rem",
    fontWeight: "600",
    textDecoration: "none",
  },
]);

export const footerLinks = style({
  display: "flex",
  flexDirection: "column",
  "@media": {
    [media.tablet]: { flexDirection: "row", gap: "2.4rem" },
  },
});
