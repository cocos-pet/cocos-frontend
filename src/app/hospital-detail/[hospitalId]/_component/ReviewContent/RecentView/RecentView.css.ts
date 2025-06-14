// RecentView.css.ts
import { color, font } from "@style/index";
import { style } from "@vanilla-extract/css";

export const recentViewContainer = style({
  padding: "0rem 2rem",
});
export const headerRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.6rem",
});
export const recentViewTitle = style([
  font.heading02,
  {
    fontWeight: "600",
    fontSize: "1.8rem",
  },
]);

export const headerLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const reviewCount = style([
  font.label01,
  {
    fontWeight: "600",
    fontSize: "1.2rem",
    color: color.gray.gray600,
  },
]);

export const moreReview = style([
  font.label01,
  {
    fontWeight: "600",
    fontSize: "1.2rem",
    color: color.gray.gray600,
    marginLeft: "0.5rem",
  },
]);

export const headerMore = style([
  font.label01,
  {
    fontWeight: "600",
    fontSize: "1rem",
    color: color.gray.gray600,
    alignItems: "center",
    gap: "0.3rem",
    display: "flex",
    borderBottom: "1px solid",
    borderColor: color.gray.gray600,
    paddingBottom: "0.05rem",
  },
]);

export const toast = style([
  font.label01,
  {
    color: color.gray.gray000,
    width: "22.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    height: "4rem",
    backgroundColor: color.primary.blue500,
    padding: "0.8rem 1.6rem",
    borderRadius: "0.8rem",
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "2.4rem",
    zIndex: 9999,
    cursor: "pointer",
    margin: "0 auto",
    textAlign: "center",
  },
]);

export const floatBtnWrapper = style({
  position: "fixed",
  right: "2rem",
  bottom: "8.8rem",
  zIndex: 999,
});
