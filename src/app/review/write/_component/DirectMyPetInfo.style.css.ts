import { style } from "@vanilla-extract/css";
import { color } from "../../../../style/styles.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  width: "100%",
  marginTop: "1.6rem",
});

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "0.9rem",

  width: "100%",
  color: color.gray.gray700,
});

export const halfTextField = style({
  position: "relative",
  width: "48.5%",
});

export const halfFocusStyle = style({
  selectors: {
    "&:focus": {
      border: `0.1rem solid ${color.primary.blue600}`,
      backgroundColor: color.gray.gray000,
    },
  },
});
