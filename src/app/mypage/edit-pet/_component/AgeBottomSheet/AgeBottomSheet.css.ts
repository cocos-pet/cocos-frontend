import { font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const ageWrapper = style({
  display: "inline-flex",
  padding: "2rem 2rem 0rem 2rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "3.2rem",
});

export const ageContainer = style({
  display: "flex",
  width: "100%",
  minWidth: "33.5rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.2rem",
});

export const pleaseAgeText = style([
  font.heading03,
  {
    alignSelf: "stretch",
    color: "black",
  },
]);

export const ageInputContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  alignSelf: "stretch",
});

export const ageInputWrapper = style([
  font.body01,
  {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
  },
]);

export const buttonWrapper = style({
  position: "absolute",
  bottom: "0",

  display: "flex",
  width: "100%",
  height: "8.8rem",
  padding: "1.2rem 2rem 3.2rem 2rem",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
});
