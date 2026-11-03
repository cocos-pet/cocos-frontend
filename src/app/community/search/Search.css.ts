import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const styles = {
  container: style({}),
  icon: style({
    width: "2.4rem",
    height: "2.4rem",
    flexShrink: 0,
  }),
  searchHeader: style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "1.6rem 2rem",
    borderBottom: `0.1rem solid ${color.gray.gray200}`,
  }),
  section: style({
    padding: "1.6rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  }),
  title: style([
    font.label01,
    {
      color: color.gray.gray800,
    },
  ]),
  chipList: style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "0.8rem",
  }),
  chipButton: style({
    all: "unset",
    cursor: "pointer",
  }),
};
