import {style} from "@vanilla-extract/css";
import {color, font, semanticColor} from "@style/styles.css.ts";

export const styles = {
  container: style({
    padding: "1.6rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  }),

  emptyContainer: style([
    font.heading03,
    {
      color: color.gray.gray600,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "76.8rem",
      marginTop: "27.821rem",
    },
  ]),

  top: style({
    display: "flex",
    gap: "0.8rem",
  }),

  icon: style({
    width: "2.4rem",
  }),
  profileImage: style({
    width: "3.2rem",
    height: "3.2rem",
    borderRadius: "50%",
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
      whiteSpace: "pre-line",
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
    overflow: "auto",
    "::-webkit-scrollbar": {
      display: "none",
    },
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
      marginTop: "0.4rem",

      width: "100%",
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
    padding: "1.6rem 2rem",
    display: "flex",
    flexDirection: "column",
    marginBottom: "9.2rem",
  }),
  textContainer: style({
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    bottom: 0,
    width: "100%",
    maxWidth: "76.8rem",
    padding: "1.2rem 2rem 4rem 2rem",
    background: color.gray.gray000,
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
  categoryName: style([
    font.label01,
    {
      color: color.gray.gray600,
      fontWeight: "600",
      fontSize: "1.4rem",
    },
  ]),
  blue: style([
    font.label01,
    {
      color: semanticColor.text.heavy,
    },
  ]),
};
