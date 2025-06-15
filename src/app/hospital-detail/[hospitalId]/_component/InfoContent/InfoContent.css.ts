import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
});

export const tags = style({
  display: "flex",
  gap: "0.4rem",
  flexWrap: "wrap",
  padding: "1.2rem 2rem 1.2rem 1.6rem",
});

export const keywords = style([
  font.body01,
  {
    color: color.primary.blue700,
    fontWeight: 500,
  },
]);

export const noKeywords = style({
  color: color.gray.gray400,
  fontSize: "1.2rem",
});

export const introduction = style({
  backgroundColor: "#FAFAFA",
  display: "inline-flex",
  alignItems: "center",
  gap: "1rem",
});

export const introductionText = style([
  font.body01,
  {
    padding: "0.8rem 2.8rem 0.8rem 2.8rem",
    color: color.gray.gray700,
  },
]);

export const addressRow = style({
  display: "flex",
  alignItems: "center",
  padding: "2rem 2rem 0rem 2rem",
  gap: "0.8rem",
});

export const address = style([
  font.heading03,
  {
    fontWeight: 600,
  },
]);

export const copyIcon = style({
  cursor: "pointer",
  width: "1.6rem",
  height: "1.6rem",
});

export const mapWrapper = style({
  padding: "1.6rem 2rem 10.445rem 2rem ",
});

export const toast = style([
  font.label01,
  {
    color: color.gray.gray000,
    display: "flex",
    alignItems: "center",
    height: "4rem",
    backgroundColor: color.primary.blue500,
    padding: "0.8rem 1.6rem",
    borderRadius: "0.8rem",
    position: "fixed",
    left: "2rem",
    right: "2rem",
    bottom: "2.4rem",
    zIndex: 9999,
  },
]);
