import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const styles = {
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
  searchWrap: style({
    display: "flex",
    flexDirection: "column",
  }),
  noSearchData: style({
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
  hospitalItem: style({
    display: "flex",
    flexDirection: "column",
    padding: "0rem 2rem",
    backgroundColor: color.gray.gray000,
    borderRadius: "0.8rem",
    cursor: "pointer",
    width: "100%",
  }),
  hospitalInfo: style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "1.6rem 0rem",
    borderBottom: `0.1rem solid ${color.gray.gray200}`,
  }),
  hospitalName: style([
    font.heading02,
    {
      color: color.gray.gray900,
    },
  ]),
  hospitalAddress: style([
    font.body01,
    {
      color: color.gray.gray700,
    },
  ]),
  reviewCount: style([
    font.body01,
    {
      color: color.gray.gray700,
      fontWeight: "500",
    },
  ]),
  hospitalImage: style({
    display: "flex",
    width: "10.4rem",
    height: "10.4rem",
    borderRadius: "0.8rem",
    marginLeft: "1.6rem",
    flexShrink: 0,
  }),
  hospitalText: style({
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    flex: "1 1 auto",
    minWidth: 0,
  }),
};
