import { style } from "@vanilla-extract/css";
import { color } from "@style/styles.css.ts";

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
    padding: "1.6rem 2rem 0 2rem",
    display: "flex",
    flexDirection: "column",
  }),
  filterwrap: style({}),
  noSearchData: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 8rem)",
  }),
};
