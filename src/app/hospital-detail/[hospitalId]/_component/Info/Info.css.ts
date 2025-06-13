import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css";

export const infoContainer = style({
  display: "flex",
  padding: "3.2rem 0rem 4rem 0rem",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.6rem",
  alignSelf: "stretch",
});

export const infoName = style([
  font.heading01,
  {
    fontWeight: 600,
  },
]);

export const infoPhoneNumber = style([
  font.body01,
  {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    fontWeight: 500,
    color: color.gray.gray700,
  },
]);

export const copyIcon = style({
  cursor: "pointer",
  width: "1.6rem",
  height: "1.6rem",
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
