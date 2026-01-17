import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const styles = {
  container: style({
  }),
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
    alignItems: "flex-start",
  }),
  searchWrap: style({
    marginTop: "1.6rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
  }),
  filterwrap: style({}),

  noSearchData: style({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 8rem)",

    paddingBottom: "10.4rem",
  }),

  noSearchResultImage: style({
    width: "26.3rem",
    height: "15.5rem",
    objectFit: "cover",
  }),

  noSearchText: style([
    font.heading03,
    {
      marginTop: "1.7rem",
      color: color.gray.gray700,
      width: "25.3rem",
      textAlign: "center",
    },
  ]),

  noSearchRecommendText: style([
    font.heading03,
    {
      marginTop: "1.1rem",
      width: "25.3rem",
      color: color.gray.gray600,
      textAlign: "center",
    },
  ]),
};
