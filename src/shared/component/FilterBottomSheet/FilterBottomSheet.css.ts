import { color } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const selectedZone = style({
  display: "flex",
  width: "100%",
  minHeight: "64px",
  padding: "12px 20px",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",

  whiteSpace: "nowrap",
  overflowX: "scroll",
  gap: "1rem",
});

export const categoryZone = style({
  display: "flex",
  width: "100%",
  minHeight: "56px",
  paddingTop: "11px",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",

  whiteSpace: "nowrap",
  overflowX: "scroll",

  borderBottom: `1px solid ${color.gray.gray200}`,
});

export const bodyZone = style({
  display: "flex",
  justifyContent: "center",
});
