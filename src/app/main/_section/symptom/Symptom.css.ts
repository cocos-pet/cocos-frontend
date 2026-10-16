import { font, semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";
import { media, pagePadding } from "@style/breakpoints";

export const symptomContainer = style({
  display: "flex",
  gap: "1.2rem",
  flexDirection: "column",
  width: "100%",
  padding: `0rem ${pagePadding.mobile} 3.2rem ${pagePadding.mobile}`,
  "@media": {
    [media.tablet]: {
      padding: `0 ${pagePadding.tablet} 4rem ${pagePadding.tablet}`,
      gap: "1.6rem",
    },
    [media.laptop]: {
      padding: `0 ${pagePadding.laptop} 4.8rem ${pagePadding.laptop}`,
      gap: "2rem",
    },
  },
});

export const symptomTitle = style([
  font.heading02,
  {
    color: semanticColor.text.normal,
  },
]);

export const symptomGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  "@media": {
    [media.tablet]: { gap: "0.8rem" },
    [media.laptop]: { gap: "1.2rem" },
  },
});

export const symptomItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const symptomName = style([
  font.label01,
  {
    color: semanticColor.text.normal,
    textAlign: "center",
    fontWeight: "500",
  },
]);
