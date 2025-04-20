import {style} from "@vanilla-extract/css";
import {color, font} from "@style/styles.css.ts";

export const reviewItemContainer = style({
  width: "100%",
});

export const hospitalDetail = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const hospitalName = style([
  font.body01,
  {
    color: color.gray.gray900,
    fontWeight: "600",
  },
]);

export const hospitalAddress = style([
  font.body01,
  {
    color: color.gray.gray600,
  },
]);

export const reviewContent = style([
  font.body01,
  {
    color: color.gray.gray800,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
]);

export const reviewContentExpanded = style([
  font.body01,
  {
    color: color.gray.gray800,
  },
]);

export const detailButton = style([
  font.body01,
  {
    color: color.primary.blue500,
    cursor: "pointer",
    textDecoration: "underline",
    marginTop: "0.4rem",
  },
]);

export const detailSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  marginTop: "1.2rem",
  paddingTop: "1.2rem",
  borderTop: `1px solid ${color.gray.gray200}`,
});

export const detailTitle = style([
  font.body01,
  {
    color: color.gray.gray900,
    fontWeight: "600",
  },
]);

export const detailContent = style([
  font.body01,
  {
    color: color.gray.gray800,
  },
]);

export const petInfoContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
});

export const reviewChipsContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
  marginTop: "1.2rem",
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
