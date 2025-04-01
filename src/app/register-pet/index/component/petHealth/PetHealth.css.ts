import {style} from "@vanilla-extract/css";

export const btnWrapper = style({
  maxWidth: "76.8rem",
  width: "100%",
  position: "fixed",
  bottom: 0,
  display: "grid",
  gridTemplateColumns: "9.6rem calc(100% - 10.8rem)",
  gap: "1.2rem",
  whiteSpace: "nowrap",
  padding: "1.2rem 2rem 3.2rem 2rem",
});
