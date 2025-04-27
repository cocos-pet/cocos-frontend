import { style } from "@vanilla-extract/css";
import { color, font, semanticColor } from "@style/styles.css.ts";

export const reviewItemContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
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
    WebkitBox: "vertical",
  },
]);

export const reviewContentExpanded = style([
  font.body01,
  {
    color: color.gray.gray800,
  },
]);

export const detailButton = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
    cursor: "pointer",
  },
]);

export const detailSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
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

export const goodReviewChip = style({
  backgroundColor: color.primary.blue100,
  color: color.primary.blue500,
  padding: "0.4rem 0.8rem",
  borderRadius: "1.6rem",
  fontSize: "1.2rem",
});

export const badReviewChip = style({
  backgroundColor: color.red.red100,
  color: color.red.red500,
  padding: "0.4rem 0.8rem",
  borderRadius: "1.6rem",
  fontSize: "1.2rem",
});

export const profileContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
  cursor: "pointer",
});

export const profileImageContainer = style({
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
  overflow: "hidden",
});

export const profileImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const profileInfoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const profileInfoTop = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const nickname = style([
  font.body01,
  {
    color: color.gray.gray900,
    fontWeight: "600",
  },
]);

export const createdAt = style([
  font.body01,
  {
    color: color.gray.gray600,
  },
]);

export const profileInfoBottom = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const breed = style([
  font.body01,
  {
    color: color.gray.gray700,
  },
]);

export const petAge = style([
  font.body01,
  {
    color: color.gray.gray700,
  },
]);
