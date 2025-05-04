import {style} from "@vanilla-extract/css";
import {color, font, semanticColor} from "@style/styles.css.ts";

export const reviewItemContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  margin: "1.6rem 0",
});

export const hospitalDetail = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  padding: "1.6rem",
  borderRadius: "0.8rem",
  border: `1px solid ${semanticColor.line.strong}`,
  background: semanticColor.neutral.strong,
});

export const hospitalName = style([
  font.heading03,
  {
    color: semanticColor.text.normal,
    fontWeight: "600",
  },
]);

export const hospitalAddress = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
  },
]);

export const reviewContent = style([
  font.body01,
  {
    color: semanticColor.text.normal,
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    margin: "1.6rem 0",
  },
]);

export const reviewContentExpanded = style([
  font.body01,
  {
    color: color.gray.gray800,
    margin: "1.6rem 0",
  },
]);

export const detailButton = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
    cursor: "pointer",
    fontWeight: 500,
    marginBottom: "1.6rem",
  },
]);

export const detailSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  marginBottom: "1.6rem",
});

export const detailTitle = style([
  font.body01,
  {
    color: semanticColor.text.assistive,
    fontWeight: "600",
    marginBottom: "0.8em",
  },
]);

export const detailContent = style([
  font.body01,
  {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.8rem",
  },
]);

export const petInfoContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
  border: `1px solid ${semanticColor.line.heavy}`,
  borderRadius: "0.8rem",
  padding: "1.6rem",
});

export const petInfoCategory = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
});

export const petInfoLabel = style([
  font.body01,
  {
    color: semanticColor.text.assistive,
    fontWeight: "500",
  },
]);

export const petInfoValue = style([
  font.body01,
  {
    color: semanticColor.text.normal,
    fontWeight: "600",
  },
]);

export const reviewChipsContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
});

export const blurEffect = style({
  filter: "blur(4px)",
  transition: "filter 0.3s ease-in-out",
  WebkitFilter: "blur(4px)",
  msFilter: "blur(4px)",
});

export const reviewDetailContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});
