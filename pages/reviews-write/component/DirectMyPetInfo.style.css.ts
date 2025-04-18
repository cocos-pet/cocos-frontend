import { style } from "@vanilla-extract/css";
import { color } from "../../../src/style/styles.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  width: "100%",
  marginTop: "1.6rem",
});

export const container = style(
  {
  display: "flex",
  justifyContent: "space-between",
  gap: "0.9rem",
  
  width: "100%",
  color:color.gray.gray700,
});
