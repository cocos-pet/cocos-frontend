import { semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";
import { contentMaxWidth, media } from "@style/breakpoints";

export const carouselContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: contentMaxWidth.mobile,
  margin: "0 auto",
  aspectRatio: "360/159",
  overflow: "hidden",
  "@media": {
    [media.tablet]: {
      maxWidth: contentMaxWidth.tablet,
      aspectRatio: "960/280",
      borderRadius: "0 0 1.6rem 1.6rem",
    },
    [media.laptop]: {
      maxWidth: contentMaxWidth.laptop,
      aspectRatio: "1280/320",
      borderRadius: "0 0 2rem 2rem",
    },
  },
});

export const carouselSlides = style({
  display: "flex",
});

export const carouselSlide = style({
  flex: "0 0 100%",
  position: "relative",
  aspectRatio: "360/159",
  "@media": {
    [media.tablet]: { aspectRatio: "960/280" },
    [media.laptop]: { aspectRatio: "1280/320" },
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const carouselStatus = style({
  position: "absolute",
  bottom: "3rem",
  right: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: semanticColor.neutral.assistive,
  borderRadius: "1.2rem",
  color: "white",
  opacity: "0.4",
  zIndex: "4",
  "@media": {
    [media.tablet]: { bottom: "4rem", right: "2rem" },
    [media.laptop]: { bottom: "4.8rem", right: "3.2rem" },
  },
});
