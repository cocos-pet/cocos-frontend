import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const styles = {
  container: style({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "1.2rem",
    paddingBottom: "1.6rem",
    margin: "2rem 2rem 0",
    borderBottom: `1px solid ${color.gray.gray200}`,
  }),
  left: style([
    font.label01,
    {
      display: "flex",
      flexDirection: "column",
      color: color.gray.gray700,
      // width: "70%",
      overflow: "hidden",
    },
  ]),
  category: style([
    font.label01,
    {
      color: color.gray.gray700,
      marginBottom: "0.4rem",
    },
  ]),
  title: style([
    font.heading02,
    {
      color: color.gray.gray900,
    },
  ]),
  contents: style([
    font.body01,
    {
      color: color.gray.gray700,
      marginBottom: "0.8rem",
      width: "inherit",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      boxSizing: "border-box",
    },
  ]),
  subContents: style({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "0.8rem",
  }),
  item: style([
    font.label01,
    {
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
    },
  ]),
  postImage: style({
    flexShrink: 0,
  }),
};
