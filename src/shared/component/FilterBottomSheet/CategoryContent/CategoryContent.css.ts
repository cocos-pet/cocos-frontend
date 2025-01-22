import { style } from "@vanilla-extract/css";

export const styles = {
  kindWrapper: style({
    display: "flex",
    padding: "1.6rem 0rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.8rem",
  }),

  symptomsWrapper: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }),
};
