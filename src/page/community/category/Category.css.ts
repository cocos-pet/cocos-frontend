import { style } from "@vanilla-extract/css";
import { font } from "@style/styles.css";
import { color } from "@style/styles.css";

export const categoryContainer = style({
  width: "100%",
});

export const postsContainer = style({
  padding: "1.6rem 2rem 2rem 2rem",
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
    width: "100%",
    maxWidth: "76.8rem",
    marginTop: "27.821rem",
  },
]);
