import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { color, font } from "@style/styles.css";

export const wrapper = recipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1.2rem",

    width: "100%",
    padding: "1.6rem 2rem",
    borderTop: `1px solid ${color.gray.gray300}`,
  },
  variants: {
    selected: {
      false: {
        backgroundColor: color.gray.gray000,
      },
      true: {
        backgroundColor: color.primary.blue100,
      },
    },
  },
});

export const box = style({
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
});

export const infoLayout = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  minWidth: "21.3rem",
});

export const name = style([
  font.heading02,
  {
    color: color.gray.gray900,
  },
]);

export const address = style([
  font.body01,
  {
    color: color.gray.gray700,
  },
]);

export const img = style({
  width: "7.6rem",
  height: "7.6rem",
  borderRadius: "8px",
});
