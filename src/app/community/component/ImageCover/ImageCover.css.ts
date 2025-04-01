import {style} from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  borderRadius: "0.8rem",
});

export const deleteButton = style({
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 3,
});

export const ghost = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "10.4rem",
  height: "10.4rem",
  zIndex: 1,
  borderRadius: "0.8rem",
  background:
    "linear-gradient(0deg, rgba(217, 217, 217, 0.00) 0%, rgba(115, 115, 115, 0.30) 100%)",
});

export const image = style({
  width: "10.4rem",
  height: "10.4rem",
  borderRadius: "0.8rem",
});
