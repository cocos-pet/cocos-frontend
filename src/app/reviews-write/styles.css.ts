import { style } from "@vanilla-extract/css";
import { color } from "@style/styles.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "3.2rem",
  width: "100%",
  padding: "2rem",
  backgroundColor: color.gray.gray100,
});

export const buttonContainer = style({
  position: "absolute",
  bottom: "0rem",
  left: "0",
  width: "100%",
  padding: "1.2rem 2rem 3.2rem 2rem",

  backgroundColor: color.gray.gray000,
});
