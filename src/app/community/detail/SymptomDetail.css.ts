import {color, font} from "@style/styles.css.ts";
import {style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";

export const categoryContainer = style({
  width: "100%",
  position: "relative",
});

export const headerContainer = style({
  backgroundColor: "#fff",
  zIndex: 20,
});

export const postsContainer = style({
  padding: "1.6rem 2rem 2rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const filterContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.6rem 2rem 0rem 2rem",
});

export const floatingBtnContainer = style({
  position: "fixed",
  bottom: "1.6rem",
  right: "max(2.8rem, calc((100% - 76.8rem) / 2 + 2.8rem))",
});

export const tabContainer = style({
  display: "flex",
  padding: "1rem 2rem",
  justifyContent: "flex-start",
  position: "sticky",
  backgroundColor: "#fff",
  top: "6.4rem",
  width: "100%",
  zIndex: 10,
});

export const tabButton = recipe({
  base: {
    textAlign: "left",
    flex: "none",
    cursor: "pointer",
    position: "relative",
    fontFamily: font.body01,
    fontSize: "1.4rem",
    color: color.gray.gray500,
    padding: "0.8rem 1.6rem 0.8rem 1.6rem",
    lineHeight: "-0.028rem",
  },
  variants: {
    isActive: {
      true: {
        color: color.gray.gray900,
        fontWeight: "bold",
      },
      false: {
        color: color.gray.gray500,
        fontWeight: "normal",
      },
    },
  },
});

export const underline = style({
  position: "absolute",
  bottom: "-1.2rem",
  left: "50%",
  transform: "translateX(-50%)",
  width: "2.4rem",
});

export const emptyContainer = style([
  font.heading03,
  {
    color: color.gray.gray600,
    textAlign: "center",
  },
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 6.4rem)",
    padding: "0 2rem",
  },
]);

export const reviewContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.6rem",
});

export const reviewItemContainer = style({
  padding: "0 2rem",
  width: "100%",
});

export const reviewFilter = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "1.6rem 2rem",
  gap: "0.8rem",
  alignItems: "center",
  width: "100%",
});

export const reviewRegion = style({
  fontFamily: font.body01,
  fontSize: "1.4rem",
  padding: "0.6rem 1.4rem",
  borderRadius: "0.8rem",
});

export const reviewButton = style({
  padding: "0.6rem 1.4rem",
  border: `1px solid ${color.primary.blue900}`,
  borderRadius: "0.8rem",
  fontFamily: font.body01,
  fontWeight: "600",
  fontSize: "1.4rem",
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});
