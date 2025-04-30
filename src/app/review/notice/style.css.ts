import { style } from "@vanilla-extract/css";
import { font, color } from "@style/styles.css.ts";

export const backgroundColor = style({
    background: 'var(--blue-bg, linear-gradient(180deg, var(--primary-blue100, #DEFEFF) 0%, #FFF 36.13%))',
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1.2rem 2rem",
});

export const topLayout = style([
  font.title03,
  {
    color: color.gray.gray900,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
]);

export const dangerImg = style({
  marginBottom: "1.6rem",
});

export const title = style({
  marginBottom: "0.8rem",
});

export const docs = style([
  font.body01,
  {
    color: color.gray.gray800,
  },
]);

export const mainImg = style({
  width: "26rem",
  height: "19.5rem",

  margin: "2.4rem 0 4.8rem",
});

export const checkbox = style({
  display: "flex",
  alignItems: "center",
});

export const check = style({
  width: "2.4rem",
  height: "2.4rem",
  marginRight: "0.8rem",
});

export const red = style({
  color: color.red.point_red,
});

export const bottomLayout = style([
  font.body01,
  {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",

    fontWeight: "500",
  },
]);

export const buttonLayout = style({
  position: "sticky",
  bottom: "0",

  width: "100%",
  padding: "1.2rem 2rem 3.2rem 2rem",

  backgroundColor: color.gray.gray000,
});
