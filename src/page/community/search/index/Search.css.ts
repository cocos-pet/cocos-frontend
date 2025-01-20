import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const styles = {
  container: style({}),
  icon: style({
    width: "2.4rem",
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
  searchContent: style({
    padding: "1.6rem 2rem",
  }),
  title: style([
    font.label01,
    {
      color: color.gray.gray800,
      padding: "0.7rem 0.7rem 0.7rem 0",
      marginBottom: "2.4rem",
    },
  ]),
  list: style({
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  }),
  listItem: style([
    font.body01,
    {
      fontWeight: "500",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  ]),
};
