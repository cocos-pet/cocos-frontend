import { style, styleVariants } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

const base = style({
  fontSize: font.body01,
  color: color.gray.gray900,
  border: "none",
  "::placeholder": {
    color: color.gray.gray700,
  },
  ":focus": {
    outline: "none",
  },
});

export const styles = {
  wrapper: style({
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    // padding: "10px 20px",
    border: `0.1rem solid ${color.gray.gray200}`,
    borderRadius: "8px",
  }),
  input: base,
  error: style([base, { borderColor: color.red.warning_red200 }]),
  disabled: style([
    base,
    {
      background: color.gray.gray300,
      pointerEvents: "none",
    },
  ]),
  icon: style({
    position: "absolute",
    right: "10px", // 아이콘 위치 조정
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none", // 아이콘 클릭 방지
  }),
};
