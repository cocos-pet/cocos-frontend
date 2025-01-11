import { style, styleVariants } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

const base = style([
  font.body01,
  {
    letterSpacing: "-0.28px",
    fontWeight: 500,
    height: "auto",
    color: color.gray.gray900,
    border: "none",
    "::placeholder": {
      color: color.gray.gray700,
    },
    ":focus": {
      outline: "none",
    },
  },
]);

export const styles = {
  wrapper: style({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    alignItems: "center",
    padding: "1rem 2rem",
    border: `0.1rem solid ${color.gray.gray200}`,
    borderRadius: "8px",
  }),
  input: base,
  error: style([base, { border: `0.1rem solid ${color.red.warning_red200}` }]),
  disabledWrapper: style({
    background: color.gray.gray300,
    pointerEvents: "none",
  }),
  disabledInput: style([
    base,
    {
      background: color.gray.gray300,
      color: color.gray.gray500,
    },
  ]),
  icon: style({
    height: "2rem",
    alignContent: "center",
  }),
};
