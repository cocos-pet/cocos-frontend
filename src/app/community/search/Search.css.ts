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
  sectionLabel: style([
    font.label01,
    {
      fontWeight: "500",
      color: color.gray.gray900,
    },
  ]),
  sectionTitle: style([
    font.heading02,
    {
      color: color.gray.gray900,
    },
  ]),
  sectionHeader: style({
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  }),
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
  popularCard: style({
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    padding: "1.6rem",
    border: `0.1rem solid ${color.gray.gray200}`,
    borderRadius: "1.6rem",
  }),
  popularItem: style([
    font.body01,
    {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "1.2rem",
      padding: "0.4rem 0",
      fontWeight: 600,
      color: color.gray.gray900,
      cursor: "pointer",
      background: "none",
      border: "none",
      textAlign: "left",
      width: "100%",
    },
  ]),
  popularRank: style({
    width: "1.6rem",
    color: color.primary.blue700,
    flexShrink: 0,
  }),
  popularKeyword: style({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  popularDivider: style({
    height: "0.1rem",
    background: color.gray.gray200,
    border: "none",
    margin: 0,
  }),
};
