import { color, font } from "@style/styles.css";
import { style } from "@vanilla-extract/css";

export const textareaContainer = style([
  font.body01,
  {
    fontWeight: 500,
    color: color.gray.gray900,
    width: "100%",
    minHeight: "23.5rem",
    padding: "1.5rem",
    borderRadius: "0.8rem",
    border: `0.1rem solid ${color.gray.gray200}`,
    background: color.gray.gray000,
    "::placeholder": {
      color: color.gray.gray600,
    },
    ":focus": {
      outline: "none",
    },
  },
]);

export const child = style({});
