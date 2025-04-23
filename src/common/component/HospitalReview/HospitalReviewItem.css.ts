import { style } from "@vanilla-extract/css";
import { color, font, semanticColor } from "@style/styles.css.ts";

export const hospitalReviewItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: "white",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
  margin: "16px 0",
});

export const hospitalInfoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const hospitalInfoTitle = style([
  font.heading02,
  {
    fontWeight: "600",
    color: semanticColor.text.normal,
  },
]);

export const hospitalInfoArea = style([
  font.body01,
  {
    color: semanticColor.text.assistive,
  },
]);

export const reviewContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const reviewContent = style([
  font.body01,
  {
    color: semanticColor.text.normal,
    lineHeight: "1.5",
  },
]);

export const detailButton = style({
  alignSelf: "flex-end",
  backgroundColor: "transparent",
  color: color.primary.blue700,
  border: "none",
  padding: "8px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  ":hover": {
    backgroundColor: color.primary.blue100,
  },
});

export const expandedContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
  backgroundColor: color.gray.gray100,
  borderRadius: "8px",
  marginTop: "8px",
});

export const detailSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const detailTitle = style([
  font.body01,
  {
    fontWeight: "600",
    color: semanticColor.text.normal,
    margin: 0,
  },
]);

export const detailContent = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const animalInfo = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "8px",
});

export const infoItem = style([
  font.body01,
  {
    color: semanticColor.text.normal,
  },
]);

export const diseaseText = style([
  font.body01,
  {
    color: semanticColor.text.normal,
    marginTop: "4px",
  },
]);

export const collapseButton = style({
  alignSelf: "flex-end",
  backgroundColor: "transparent",
  color: color.primary.blue700,
  border: "none",
  padding: "8px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  marginTop: "8px",
  ":hover": {
    backgroundColor: color.primary.blue100,
  },
});

export const chipContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const chipSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const chipTitle = style([
  font.label01,
  {
    fontWeight: "600",
    color: semanticColor.text.normal,
  },
]);

export const chipWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}); 