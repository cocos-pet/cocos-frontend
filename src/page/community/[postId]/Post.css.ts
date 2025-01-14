import { createVar, style } from "@vanilla-extract/css";
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
      color: color.gray.gray700,
    },
  ]),
};
