import { style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

//동적 스타일링 (style 관련된 코드는 반드시 .css.ts에 작성하는게 rule
export const styles = {
  container: style({
    padding: "1.6rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  }),
  icon: style({
    width: "2.4rem",
  }),
  top: style({
    display: "flex",
    flexDirection: "row",
    gap: "0.8rem",
  }),
  userProfile: style({
    width: "3.2rem",
    height: "3.2rem",
    borderRadius: "50%",
  }),
  info: style({
    display: "flex",
    flexDirection: "column",
  }),
  infoName: style([
    font.label01,
    {
      color: color.gray.gray800,
    },
  ]),
  infoDetail: style([
    font.label01,
    {
      fontWeight: "500",
      color: color.gray.gray700,
      lineHeight: "130%",
    },
  ]),
  title: style([
    font.heading02,
    {
      marginBottom: "0.4rem",
      color: color.gray.gray900,
    },
  ]),
  content: style([
    font.heading03,
    {
      color: color.gray.gray800,
    },
  ]),

  image: style({
    width: "100%",
    maxHeight: "33.5rem",
    borderRadius: "0.8rem",
    objectFit: "cover",
  }),
  labelWrap: style({
    display: "flex",
    flexDirection: "row",
    gap: "0.4rem",
  }),
  countWrap: style({
    padding: "0.8rem 0",
  }),
  subContents: style({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "0.8rem",
  }),
  item: style([
    font.label01,
    {
      width: "6.2rem",
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
    },
  ]),
  commentTitle: style([
    font.body01,
    {
      marginBottom: "2.5rem",
      color: color.gray.gray700,
    },
  ]),
  commentCount: style([
    font.body01,
    {
      color: color.gray.gray900,
    },
  ]),
  commentContainer: style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
  upload: style([
    font.body01,
    {
      color: color.primary.blue900,
      flexShrink: 0,
      padding: "1rem 1.2rem",
      borderRadius: "1rem",
    },
  ]),
};
