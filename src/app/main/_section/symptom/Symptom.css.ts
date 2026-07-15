import { font, semanticColor } from "@style/styles.css.ts";
import { keyframes, style } from "@vanilla-extract/css";

const pulse = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.4 },
});

export const symptomContainer = style({
  display: "flex",
  gap: "1.2rem",
  flexDirection: "column",
  width: "100%",
  padding: "0rem 2rem 3.2rem 2rem",
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
  minHeight: "14.6rem",
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

export const skeletonIcon = style({
  width: "5.6rem",
  height: "5.6rem",
  borderRadius: "50%",
  backgroundColor: semanticColor.line.strong,
  animation: `${pulse} 1.5s ease-in-out infinite`,
});

export const skeletonLabel = style({
  width: "3.2rem",
  height: "1.2rem",
  marginTop: "0.4rem",
  borderRadius: "0.4rem",
  backgroundColor: semanticColor.line.strong,
  animation: `${pulse} 1.5s ease-in-out infinite`,
});
