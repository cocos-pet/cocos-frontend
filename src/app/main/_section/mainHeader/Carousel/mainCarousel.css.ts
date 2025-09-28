import { semanticColor } from "@style/styles.css.ts";
import { style } from "@vanilla-extract/css";

export const carouselContainer = style({
  position: "relative",
  width: "100%",
  maxWidth: "76.8rem",
  margin: "0 auto",
  aspectRatio: "360/159",
  overflow: "hidden",
});

export const carouselSlides = style({
  display: "flex",
});

export const carouselSlide = style({
  flex: "0 0 100%",
  position: "relative",
  aspectRatio: "360/159",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  aspectRatio: "360/159",
});

export const carouselStatus = style({
  position: "absolute",
  bottom: "3rem",
  right: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: semanticColor.neutral.assistive,
  borderRadius: "12px",
  color: "white",
  opacity: "0.4",
  zIndex: "4",
});
