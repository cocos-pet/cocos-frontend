import { createVar, style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

//동적 스타일링 (style 관련된 코드는 반드시 .css.ts에 작성하는게 rule
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
    gap: "1.6rem",
  }),
  filterwrap: style({}),
};
