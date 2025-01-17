import { style } from "@vanilla-extract/css";

export const styles = {
  kindWrapper: style({
    display: "flex",
    width: "33.5rem",
    padding: "16px 0px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
  }),

  symptomsWrapper: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }),
};
